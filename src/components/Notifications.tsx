import React, { useState } from 'react';
import axios from 'axios';

function Notifications() {
  const [inputToSend, setinputToSend] = useState('');
  const jsonifyInput = () => {
    return { message: inputToSend };
  };
  const onClickHandler = async () => {
    await axios.post('http://127.0.0.1:3000', jsonifyInput());
  };

  return (
    <div>
      Notifications
      <br />
      <input
        type='text'
        onChange={(e) => {
          setinputToSend(e.target.value);
        }}
      />
      <br />
      <button onClick={onClickHandler}>Send</button>
    </div>
  );
}

export default Notifications;
