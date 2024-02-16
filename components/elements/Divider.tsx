import React from 'react';

function Divider({name, className}: { name: string, className: string }) {
  return (
    <div className={`divider ${className}`}>{name}</div>
  );
}

export default Divider;
