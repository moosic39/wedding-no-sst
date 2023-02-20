import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react';

export type TimeLeft = (displayTime: number) => {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function ShowCountdown(props: { countdown: number }): ReactJSXElement {
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

  const { ...time } = timeLeft(props.countdown);
  return (
    <>
      <span>{time.years} </span>
      <span>{time.months} </span>
      <span>{time.days} </span>
      <span>{time.hours} </span>
      <span>{time.minutes} </span>
      <span>{time.seconds} </span>
    </>
  );
}

export default ShowCountdown;
