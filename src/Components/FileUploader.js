import React from "react";

export default function FileUploader({ workerRef }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    workerRef.current.postMessage({ type: "upload", file });
  };

  return (
    <div>
      <label>Upload .txt File: </label>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
    </div>
  );
}
