"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const DraftingOverlay = (props) => {
  const [countdown, setCountdown] = useState(48);
  const [isActive, setIsActive] = useState(false);
  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setCountdown(48);
  };
  useEffect(() => {
    startTimer();
    if (countdown === 0) {
      resetTimer();
    }
  }, [countdown]);
  useEffect(() => {
    let interval;
    if (isActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, countdown]);

  return (
    <div className="h-screen bg-green-500">
      {/* <div
        className="bg-green-500 z-10 w-full absolute top-0"
        style={{ height: `780px` }}
      ></div> */}
      <div className="absolute bottom-0 w-full">
        <div className="relative">
          <div className="absolute text-3xl font-bold text-black text bottom-0 flex py-4 justify-center w-full">
            <div className="text-center ">
              {/* <p className="text-4xl uppercase font-extrabold">Ban phase</p> */}
              <p>{countdown}сек</p>
            </div>
          </div>
          <video autoPlay loop className="w-full" muted src="/assets/ban.mp4" />
          <div className="absolute  w-full bottom-0  z-10 flex justify-between">
            <div
              className=" w-1/2 "
              style={{
                height: `336px`,
                paddingLeft: `38px`,
                paddingTop: `27px`,
              }}
            >
              <div className="h-full flex gap-9 ">
                <div className="space-y-5 h-full w-full">
                  <div
                    className="flex w-full"
                    style={{ width: `660px`, height: `190px` }}
                  >
                    {props.data?.camp_list[0].player_list.map((player, idx) => {
                      return (
                        <div
                          key={player.name}
                          className="  relative "
                          style={{ width: `132px`, height: `190px` }}
                        >
                          <Image
                            src={"/assets/teamLogo1.png"}
                            alt=""
                            className="object-contain z-10"
                            fill
                          />
                          <div
                            className={` ${
                              player.picking == true
                                ? "bg-gradient-to-t from-red-800"
                                : ""
                            } h-full animate-pulse`}
                          ></div>
                          <div className="h-1/2 pb-1 text-slate-100 font-semibold bottom-0 z-20 w-full bg-gradient-to-t from-black absolute flex justify-center items-end">
                            <p className="text-sm text-center">{player.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex" style={{ height: `73px` }}>
                    {props.data?.camp_list[1].player_list.map((player) => {
                      return (
                        <div
                          key={player.ban_heroid}
                          className="h-full grayscale relative"
                          style={{ width: `132px` }}
                        >
                          <Image
                            src={`/heroes/${
                              player?.ban_heroid ? player.ban_heroid : ""
                            }.png`}
                            alt=""
                            className="object-fill"
                            fill
                          />
                          {/* <p className="absolute text-xl text-black">
                            {player.ban_heroid}
                          </p> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full pt-2">
                  <div
                    className=" relative "
                    style={{ height: `143px`, width: `115px` }}
                  >
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
            <div
              className=" w-1/2 "
              style={{
                height: `336px`,
                paddingRight: `42px`,
                paddingTop: `27px`,
              }}
            >
              <div className="h-full flex gap-9 ">
                <div className="w-full flex justify-end pt-2">
                  <div
                    className=" relative  "
                    style={{ height: `143px`, width: `115px` }}
                  >
                    <Image
                      src={"/assets/teamLogo1.png"}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-5 h-full w-full">
                  <div
                    className="flex"
                    style={{ width: `660px`, height: `190px` }}
                  >
                    {props.data?.camp_list[1].player_list.map((player, idx) => {
                      return (
                        <div
                          key={player.name}
                          className="  relative "
                          style={{ width: `132px`, height: `190px` }}
                        >
                          <Image
                            src={"/assets/player.png"}
                            alt=""
                            className="object-contain z-10"
                            fill
                          />
                          <div
                            className={` ${
                              player.picking == true
                                ? "bg-gradient-to-t from-red-800"
                                : ""
                            } h-full animate-pulse`}
                          ></div>
                          <div className="h-1/2 pb-1 text-slate-100 font-semibold bottom-0 z-20 w-full bg-gradient-to-t from-black absolute flex justify-center items-end">
                            <p className="text-sm text-center">{player.name}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex" style={{ height: `73px` }}>
                    {props.data?.camp_list[1].player_list.map((player) => {
                      return (
                        <div
                          key={player.ban_heroid}
                          className="h-full grayscale relative"
                          style={{ width: `132px` }}
                        >
                          <Image
                            src={`/heroes/${
                              player?.ban_heroid ? player.ban_heroid : ""
                            }.png`}
                            alt=""
                            className="object-fill"
                            fill
                          />
                          {/* <p className="absolute text-xl text-black">
                            {player.ban_heroid}
                          </p> */}
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
