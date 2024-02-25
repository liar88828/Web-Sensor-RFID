import React from "react";

const Container = (props:any) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 static ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;
