import React from "react";

export default function RoleCard({
  icon,
  title,
  children,
  modalTarget,
  btnLabel = "Learn More →",
}) {
  return (
    <div className="card creative-card h-100 p-4 shadow-sm d-flex flex-column">
      <div className="icon-box mb-3">
        <i className={`${icon} fs-3 text-f1b327`} />
      </div>
      <h3 className="fw-bold">{title}</h3>
      <p className="text-muted">{children}</p>
      <button
        type="button"
        className="btn btn-warning text-decoration-none fw-bold mt-auto"
        data-bs-toggle="modal"
        data-bs-target={modalTarget}
      >
        {btnLabel}
      </button>
    </div>
  );
}
