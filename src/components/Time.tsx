import React, { useState } from 'react';
import Countdown from './Countdown';

function Time() {
  const [launchTime, setLaunchTime] = useState(Date.now());
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
