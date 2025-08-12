import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <div style={{ background: "#ddd", height: "10px", borderRadius: "5px" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "green",
            height: "100%",
            borderRadius: "5px",
          }}
        ></div>
      </div>
      <small>{Math.round(progress)}% Loaded</small>
    </div>
  );
}