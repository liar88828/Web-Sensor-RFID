import React from "react";
import Container from "./container";

const SectionTitle = ({title, preTitle, text, align}: {
  title: string,
  preTitle: string,
  text: string,
  align: string
}) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 
      ${align === "left"
        ? ""
        : "items-center justify-center text-center"}
        `}
    >
      {preTitle && (
        <div className="text-sm font-bold tracking-wider  uppercase">
          {preTitle}
        </div>
      )}

      {title && (
        <h2
          className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl ">
          {title}
        </h2>
      )}

      <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl opacity-50   ">{text}
      </p>

    </Container>
  );
}

export default SectionTitle;
