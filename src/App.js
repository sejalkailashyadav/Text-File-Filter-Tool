import React, { useState, useEffect, useRef } from "react";
import FileUploader from "./Components/FileUploader";
import Filters from "./Components/Filters";
import ResultsTable from "./Components/ResultsTable";
import ProgressBar from "./Components/ProgressBar";
import "./App.css";

function App() {
  const [lines, setLines] = useState([]);
  const [filteredLines, setFilteredLines] = useState([]);
  const [domainFilter, setDomainFilter] = useState("");
  const [wordFilter, setWordFilter] = useState("");
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [progress, setProgress] = useState(0);

  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL("./workers/fileWorker.js", import.meta.url));
    workerRef.current.onmessage = (e) => {
      const { type, lines, progress } = e.data;
      if (type === "progress") {
        setProgress(progress);
      }
      if (type === "done") {
        setLines(lines);
      }
    };
    return () => workerRef.current.terminate();
  }, []);

  useEffect(() => {
    let temp = lines;

    if (domainFilter || wordFilter) {
      temp = temp.filter(line =>
        (!domainFilter || line.includes(domainFilter)) &&
        (!wordFilter || line.includes(wordFilter))
      );
    }

    if (removeDuplicates) {
      temp = [...new Set(temp)];
    }

    setFilteredLines(temp);
  }, [lines, domainFilter, wordFilter, removeDuplicates]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(filteredLines.join("\n"));
  };

  return (
    <div className="container">
      <h1>Text File Filter Tool</h1>
      <FileUploader workerRef={workerRef} />
      <ProgressBar progress={progress} />
      <Filters
        domainFilter={domainFilter}
        setDomainFilter={setDomainFilter}
        wordFilter={wordFilter}
        setWordFilter={setWordFilter}
        removeDuplicates={removeDuplicates}
        setRemoveDuplicates={setRemoveDuplicates}
      />
      <p>Total Matches: {filteredLines.length}</p>
      <button onClick={copyToClipboard}>Copy Results</button>
      <ResultsTable results={filteredLines} />
    </div>
  );
}

export default App;
