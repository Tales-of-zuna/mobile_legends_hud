"use client";
import { Image } from "@nextui-org/react";

const PictureComponent = () => {
  return (
    <div className="h-full absolute">
      <Image src="/assets/team.jpg" fill alt="" />
    </div>
  );
};

export default PictureComponent;
