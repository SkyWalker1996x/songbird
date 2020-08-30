import React from "react";

const CircleIndicator = ({ statusAnswer }) => {
  const styles =
    statusAnswer === "correct"
      ? "circle correct"
      : statusAnswer === "wrong"
      ? "circle wrong"
      : "circle";
  return <div className={styles}>{}</div>;
};

export default CircleIndicator;
