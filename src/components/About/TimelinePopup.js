import React from "react";

const TimelinePopup = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button className="popup-close" onClick={onClose}>
            ✕
          </button>

          {/* Popup Header */}
          <div className="popup-header">
            <div className={`popup-badge ${data.type}`}>{data.type}</div>
            <span className="popup-period">{data.period}</span>
            <h2 className="popup-title">{data.title}</h2>
            {data.subtitle && <p className="popup-subtitle">{data.subtitle}</p>}
          </div>

          {/* Popup Content */}
          <div className="popup-content">
            {data.detailedInfo}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelinePopup;
