import React from 'react';

function Loading({text = 'Loading...'}: { text?: string }) {

  return <div className={'btn btn-neutral'}>
    <h1>
      {text}
    </h1>
    <span className="loading loading-spinner loading-lg"></span>
  </div>
}

export default Loading;
