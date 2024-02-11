import React from "react";

const HeroSide = ({
  mainTxt,
  subTxt,
  image,
}: {
  mainTxt?: string;
  subTxt?: string;
  image?: string;
}) => {
  return (
    <>
      <div className="grid grid-cols-2 items-center h-[650px] gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">{mainTxt}</h1>
          <h2 className="text-2xl text-muted-foreground">{subTxt}</h2>
        </div>
        <div className="flex justify-end">
          <img src={image} alt="placeholder" width={500} height={500} />
        </div>
      </div>
    </>
  );
};

export default HeroSide;
