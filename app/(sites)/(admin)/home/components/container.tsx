import React, {ReactNode} from "react";

interface IContainer {
  className?: string;
  children: ReactNode;
  id?: string;
}

const Container = ({className = '', children, id = ''}: IContainer) => {
  return (
    <div
      id={id}
      className={`container p-8 mx-auto   static ${
        className ? className : ""
      }`}>
      {children}
    </div>
  );
}

export default Container;
