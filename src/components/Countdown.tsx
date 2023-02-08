import React from 'react';

function Countdown() {
  const launchTime = new Date('06/July/2024').getTime(); //1720216800000
  const currentTime = new Date().getTime(); //1675810682233
  const displayTime = launchTime - currentTime;
  const getTime = (displayTime: number) => {
    const years = Math.floor(displayTime / (365 * 24 * 60 * 60 * 1000));
    const days = Math.floor(
      (displayTime % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000),
    );
    const hours = Math.floor(
      (displayTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
    );
    const minutes = Math.floor((displayTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((displayTime % (60 * 1000)) / 1000);
    return `${years}:${days}:${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {currentTime}
      <br />
      {displayTime}
      <br />
      <span>{getTime(displayTime)}</span>
    </div>
  );
}

export default Countdown;
