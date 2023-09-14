"use client";
import { Image } from "@nextui-org/react";

const DraftingOverlay = (props) => {
  console.log(props.data.camp_list);
  return (
    <div className="h-screen bg-green-500">
      <div className="absolute z-40 top-0 w-full bg-green-500 h-4/6"></div>
      <div className="absolute bottom-0 w-full">
        <div className="relative">
          <video autoPlay loop className="w-full" muted src="/assets/ban.mp4" />
          <div className="absolute bottom-28 w-full px-11 z-10 flex justify-between">
            <div className="space-y-2">
              <div className="flex gap-4 text-white">
                {props.data?.camp_list[0].player_list.map((player) => {
                  return (
                    <div className="relative" key={player.name}>
                      <Image
                        alt=""
                        fill
                        className="object-contain h-44"
                        src={"/assets/player.png"}
                      />{" "}
                      <p className="w-full bottom-0 z-20 text-stone-800 font-bold absolute text-center">
                        {player.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex"></div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-4 text-white">
                {props.data?.camp_list[1].player_list.map((player) => {
                  return (
                    <div className="relative" key={player.name}>
                      <Image
                        alt=""
                        fill
                        className="object-contain h-44"
                        src={"/assets/player.png"}
                      />{" "}
                      <p className="w-full bottom-0 z-20 text-stone-800 font-bold absolute text-center">
                        {player.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftingOverlay;
