"use client";

import Image from "next/image";

const DraftingOverlay = (props) => {
  return (
    <div className="h-screen bg-green-500">
      <div className="absolute bottom-0 w-full">
        <div className="relative">
          <video autoPlay loop className="w-full" muted src="/assets/ban.mp4" />
          <div className="absolute  w-full bottom-0  z-10 flex justify-between">
            <div className=" px-8 py-6 w-1/2" style={{ height: `306px` }}>
              <div className="h-full flex gap-6 ">
                <div className="space-y-4 h-full w-full">
                  <div className="flex">
                    {props.data?.camp_list[0].player_list.map((player) => {
                      return (
                        <div
                          key={player.name}
                          className="h-44 relative "
                          style={{ width: `121px` }}
                        >
                          <Image
                            src={"/assets/player.png"}
                            alt=""
                            className="object-contain "
                            fill
                          />
                          <div className="h-1/2 pb-1 text-slate-800 font-semibold bottom-0 w-full bg-gradient-to-t from-white absolute flex justify-center items-end">
                            <p className="text-sm text-center">{player.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="flex"
                    style={{ height: `66px`, paddingLeft: "3px" }}
                  >
                    {props.data?.camp_list[1].player_list.map((player) => {
                      return (
                        <div
                          key={player.name}
                          className="h-full relative"
                          style={{ width: `120px` }}
                        >
                          <Image
                            src={"/assets/kufra.png"}
                            alt=""
                            className="object-fill"
                            fill
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full ">
                  <div className="w-28 relative h-36">
                    <Image
                      src={"/assets/teamLogo2.png"}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-9 py-6 w-1/2" style={{ height: `306px` }}>
              <div className="h-full  flex gap-7 ">
                <div className="w-full flex justify-end ">
                  <div className="w-28 relative h-36">
                    <Image
                      src={"/assets/teamLogo1.png"}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-4 h-full  w-full">
                  <div className="flex">
                    {props.data?.camp_list[1].player_list.map((player) => {
                      return (
                        <div
                          key={player.name}
                          className="h-44 relative "
                          style={{ width: `121px` }}
                        >
                          <Image
                            src={"/assets/player.png"}
                            alt=""
                            className="object-contain "
                            fill
                          />
                          <div className="h-1/2 pb-1 text-slate-800 font-semibold bottom-0 w-full bg-gradient-to-t from-white absolute flex justify-center items-end">
                            <p className="text-center text-sm">{player.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="  flex"
                    style={{ height: `66px`, paddingLeft: "3px" }}
                  >
                    {props.data?.camp_list[1].player_list.map((player) => {
                      return (
                        <div
                          key={player.name}
                          className="h-full grayscale relative"
                          style={{ width: `120px` }}
                        >
                          <Image
                            src={"/assets/miya.jpg"}
                            alt=""
                            className="object-fill"
                            fill
                          />
                        </div>
                      );
                    })}
                  </div>
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
