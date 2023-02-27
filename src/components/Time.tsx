import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';

function Time() {
  const [launchTime, setLaunchTime] = useState<number>(1720216800000);
  const clickHandler = (event: any) => {
    console.log(event.target.value, 'cool');
    setLaunchTime(event.target.value);
  };

  return (
    <div>
      <div>
        <span>type date here</span>
        <input
          type='date'
          onChange={(e) => {
            setLaunchTime(e.target.valueAsNumber);
          }}
        />
        <button>Start Countdown</button>
      </div>
      <Countdown launchtime={launchTime} />
    </div>
  );
}

export default Time;
