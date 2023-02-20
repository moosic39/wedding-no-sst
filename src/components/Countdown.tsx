import React, { useEffect, useState } from 'react';
import ShowCountdown from './ShowCountdown';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

function Countdown(props: { launchtime: number }): ReactJSXElement {
  const launch = new Date(props.launchtime).getTime(); //1720216800000
  const currentTime = new Date().getTime(); //1675810682233
  const [countdown, setCountdown] = useState<number>(launch - currentTime);
  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(launch - currentTime);
      console.log('tic');
    }, 1000);

    clearInterval(id);
  }, []);

  return (
    <div>
      {currentTime}
      <br />
      {countdown}
      <br />

      <ShowCountdown countdown={countdown} />
    </div>
  );
}

export default Countdown;
