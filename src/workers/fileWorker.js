/* eslint-env worker */
onmessage = (e) => {
  const { type, file } = e.data;
  if (type === "upload") {
    readFileInChunks(file);
  }
};

function readFileInChunks(file) {
  const CHUNK_SIZE = 512 * 1024; // 0.5MB
  let offset = 0;
  const reader = new FileReaderSync();
  let allLines = [];

  while (offset < file.size) {
    const slice = file.slice(offset, offset + CHUNK_SIZE);
    const text = reader.readAsText(slice);
    const lines = text.split(/\r?\n/);

    allLines = allLines.concat(lines);
    offset += CHUNK_SIZE;

    postMessage({
      type: "progress",
      progress: Math.min((offset / file.size) * 100, 100)
    });
  }

  postMessage({ type: "done", lines: allLines });
}
