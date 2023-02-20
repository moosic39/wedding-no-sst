import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';

function Time() {
  const [launchTime, setLaunchTime] = useState<number>(1720216800000);
  const clickHandler = (event: any) => {
    console.log(event.target.valueAsNumber);
    setLaunchTime(event.target.valueAsNumber);
  };

  return (
    <div>
      <div>
        <span>type date here</span>
        <input type='date' />
        <button
          onClick={(event) => {
            clickHandler(event);
          }}
        >
          Start Countdown
        </button>
      </div>
      <Countdown launchtime={launchTime} />
    </div>
  );
}

export default Time;
