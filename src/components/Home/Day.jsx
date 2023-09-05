import React from "react";

const Day = (props) => {
  const { day, time } = props.data;
  return (
    <div style={{ border: "1px solid green", marginBottom: "20px" }}>
      <div>
        <span style={{ width: "20px", marginRight: "20px" }}>Day</span>
        <span>{day}</span>
      </div>
      {time && (
        <div>
          <span>Time:</span>
          <span>{time}</span>
        </div>
      )}
    </div>
  );
};

export default Day;
