"use client";

import Image from "next/image";

const DraftingOverlay = (props) => {
  return (
    <div className="h-screen bg-green-500">
      <div className="absolute z-40 top-0 w-full bg-green-500 h-4/6"></div>
      <div className="absolute bottom-0 w-full">
        <div className="relative">
          <video autoPlay loop className="w-full" muted src="/assets/ban.mp4" />
          <div className="absolute  w-full bottom-0  z-10 flex justify-between">
            {/* {props.data?.camp_list[1].player_list.map((player) => {
              return (
                <div className="relative h-56 w-32" key={player.name}>
                  <Image
                    alt=""
                    fill
                    className="object-contain "
                    src={"/assets/player.png"}
                  />{" "}
                  <p className="w-full bottom-0 z-20 text-stone-800 font-bold absolute text-center">
                    {player.name}
                  </p>
                </div>
              );
            })} */}

            <div
              className="bg-slate-800 bg-opacity-40 px-8 py-6 w-1/2"
              style={{ height: `306px` }}
            >
              <div className="h-full bg-lime-600 flex gap-6 bg-opacity-25">
                <div className="h-full flex bg-purple-800 opacity-30 w-full">
                  {props.data?.camp_list[1].player_list.map((player) => {
                    return (
                      <div
                        key={player.name}
                        className="h-44 relative bg-red-500 bg-opacity-50"
                        style={{ width: `121px` }}
                      >
                        <Image
                          src={"/assets/player.png"}
                          alt=""
                          className="object-contain"
                          fill
                        />
                      </div>
                    );
                  })}

                  <div></div>
                </div>
                <div className="w-full bg-orange-900 opacity-20">
                  <div className="w-28 bg-black h-36"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftingOverlay;
