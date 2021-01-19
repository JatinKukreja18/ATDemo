import React, { useEffect, useState } from 'react';

import './loader.scss';

const Loader = () => {

  const [isReady, setIsReady] = useState(false)
  const [percent, setPercent] = useState(0)


  useEffect(() => {
    if (percent === 1) {
      setIsReady(!isReady);
    }
    const timer =
      percent < 100 && setInterval(() => setPercent(percent + 1), 20);
    return () => clearInterval(timer);
  }, [percent]);

  return (
    <div>
      <div className="loader-container" />
      <h1 className='percent'>{percent}%</h1>
      <div className={`loader-overlay ${isReady ? 'active' : null}`}>
        {/* <h1 className='loading-text' style={{ display: percent >= 99 ? 'none' : 'block' }}>Loading...</h1> */}
      </div>
    </div>
  );
}
export default Loader;