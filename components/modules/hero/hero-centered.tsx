import React from "react";

const HeroCentered = ({
  mainTxt = "Humanity's Only less-code development tool",
  subTxt = "built websites fast, Like blazzzzzingly fast, with easy syntax that even a kid can understand, so that you can focus on things that are more important.",
}: {
  mainTxt?: string;
  subTxt?: string;
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[650px] gap-6 text-center">
        <h1 className="text-5xl font-bold  ">{mainTxt}</h1>
        <h2 className="text-2xl text-muted-foreground px-36">{subTxt}</h2>
      </div>
    </>
  );
};

export default HeroCentered;
