import React, { useEffect, useState } from 'react';
import ShowCountdown from './ShowCountdown';

export type TimeLeft = (displayTime: number) => {
  years: string;
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function Countdown() {
  const launchTime = new Date('06/July/2024').getTime(); //1720216800000
  const currentTime = new Date().getTime(); //1675810682233
  const [countdown, setCountdown] = useState(launchTime - currentTime);
  const timeLeft: TimeLeft = (displayTime) => {
    const years = Math.floor(displayTime / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(
      (displayTime % (365 * 24 * 60 * 60 * 1000)) /
        (30.5 * 24 * 60 * 60 * 1000),
    );
    const days = Math.floor(
      (displayTime % (30.5 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000),
    );
    const hours = Math.floor(
      (displayTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
    );
    const minutes = Math.floor((displayTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((displayTime % (60 * 1000)) / 1000);
    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(launchTime - currentTime);
      console.log('cool');
    }, 1000);

    // clearInterval(id);
  }, [countdown]);

  return (
    <div>
      {currentTime}
      <br />
      {countdown}
      <br />
      <ShowCountdown timeleft={timeLeft(countdown)}></ShowCountdown>
      <div></div>
    </div>
  );
}

export default Countdown;
