"use client";
import { Image } from "@nextui-org/react";

const VideoComponent = () => {
  return (
    <div className="h-full w-full bg-green-500 absolute top-0 left-0">
      <div className=" absolute bottom-0">
        <div className="relative w-full"></div>
        <Image
          className="object-contain"
          fill
          src="https://www.dole.com/-/media/project/dole/produce-images/fruit/bannanas_web.png?rev=b27a9f94db1744e9ae702a0ba20871d4&hash=AF03ECA16ACB32D92A74462BE212E716"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoComponent;
