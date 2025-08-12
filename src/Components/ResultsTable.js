import React from "react";
import { FixedSizeList as List } from "react-window";

export default function ResultsTable({ results }) {
  return (
    <List
      height={500}
      itemCount={results.length}
      itemSize={30}
      width={"100%"}
    >
      {({ index, style }) => (
        <div style={style}>
          {results[index]}
        </div>
      )}
    </List>
  );
}
