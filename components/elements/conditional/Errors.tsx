import React from 'react';

function Errors({text = 'Error...'}: { text?: string }) {
  return (<div className={'btn btn-error'}>
      <h1>{text}</h1>
    </div>
  );
}

export default Errors;
