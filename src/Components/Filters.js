
import React from "react";

export default function Filters({
  domainFilter,
  setDomainFilter,
  wordFilter,
  setWordFilter,
  removeDuplicates,
  setRemoveDuplicates,
}) {
  return (
   <div className="row g-2">
  <div className="col-sm-5">
    <input className="form-control" placeholder="Search by domain..." value={domainFilter} onChange={(e) => setDomainFilter(e.target.value)} />
  </div>
  <div className="col-sm-5">
    <input className="form-control" placeholder="Filter by word..." value={wordFilter} onChange={(e) => setWordFilter(e.target.value)} />
  </div>
  <div className="col-sm-2 d-flex align-items-center">
    <div className="form-check">
      <input type="checkbox" className="form-check-input" checked={removeDuplicates} onChange={(e) => setRemoveDuplicates(e.target.checked)} />
      <label className="form-check-label">Remove duplicates</label>
    </div>
  </div>
</div>
  );
}