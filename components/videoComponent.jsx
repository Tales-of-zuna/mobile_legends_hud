"use client";
import { Image } from "@nextui-org/react";

const VideoComponent = (props) => {
  return (
    <div className="h-full w-full bg-green-500 absolute top-0 left-0">
      <video
        loop
        autoPlay
        muted
        className="h-screen w-screen object-fill"
        src="/assets/test.mp4"
      ></video>
      <div className="absolute w-screen text-black text-4xl z-50 bottom-1/3 ">
        <div className="space-y-6">
          <div className="w-full flex justify-around">
            {props.data?.camp_list[0].player_list.map((player, idx) => {
              return (
                <div key={idx}>
                  <Image src="/assets/player.png" alt="" className="h-96" />
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-around">
            {props.data?.camp_list[0].player_list.map((player, idx) => {
              return <div key={idx}>{player.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
