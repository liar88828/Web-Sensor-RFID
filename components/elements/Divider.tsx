import React from 'react';

function Divider({name = '', className = 'divider-primary'}: { name?: string, className?: string }) {
  return (
    <div className={`divider m-0 sm:m-3 ${className} `}>{name}</div>
  );
}

export default Divider;
