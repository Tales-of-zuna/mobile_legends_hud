"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const DraftingOverlay = (props) => {
  const [countdown, setCountdown] = useState(48);
  const [isActive, setIsActive] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setCountdown(48);
  };

  const checkSides = () => {
    props.data?.camp_list[0].player_list.map((player) => {
      if (player.banning == true || player.picking == true) {
        setLeft(true);
        setRight(false);
      } else {
        setLeft(false);
        setRight(false);
      }
    });
    props.data?.camp_list[1].player_list.map((player) => {
      if (player.banning == true || player.picking == true) {
        setRight(true);
        setLeft(false);
      } else {
        setLeft(false);
        setRight(false);
      }
    });
  };
  useEffect(() => {
    startTimer();
    checkSides();
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
    <div className="h-screen  bg-green-500">
      <div className="absolute montser bottom-0 w-full">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@800&display=swap");
          .montser {
            font-family: "Unbounded", sans-serif;
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateX(-25%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: none;
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
        `}</style>
        <div className="relative">
          <div className="absolute text-3xl font-bold text-black text bottom-0 flex py-4 justify-center w-full">
            <svg
              className={`${
                left ? "opacity-100" : "opacity-0"
              } h-10 mr-4 animate-bounce`}
              viewBox="0 0 1000 1000"
            >
              <polygon points="460.58,688.06 383.48,765.17 118.95,500.64 384.14,235.45 461.25,312.57 273.17,500.65 " />
              <polygon points="661.59,688.06 584.48,765.17 319.96,500.64 585.15,235.45 662.26,312.57 474.18,500.65 " />
            </svg>
            <div className="text-center">
              <p className="text-4xl uppercase font-extrabold">Ban phase</p>
              <p>{countdown}</p>
            </div>

            <svg
              className={`${
                right ? "opacity-100" : "opacity-0"
              } h-10 ml-4 animate-bounce`}
              viewBox="0 0 1000 1000"
            >
              <polygon points="508.04,312.56 585.15,235.45 849.67,499.98 584.48,765.17 507.37,688.05 695.45,499.97 " />
              <polygon points="307.03,312.56 384.14,235.45 648.67,499.98 383.48,765.17 306.36,688.05 494.44,499.97 " />
            </svg>
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
                            src={`/heroesPng/${
                              player.heroid ? player.heroid : "teamLogo1"
                            }.png`}
                            alt=""
                            className="object-cover z-10"
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
                    {props.data?.camp_list[0].player_list.map((player) => {
                      return (
                        <div
                          key={player.ban_heroid}
                          className="h-full grayscale relative"
                          style={{ width: `132px` }}
                        >
                          <Image
                            src={`/heroes/${
                              player?.ban_heroid
                                ? player.ban_heroid
                                : "teamLogo1"
                            }.png`}
                            alt=""
                            className="object-fill"
                            fill
                          />
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
                          className="relative"
                          style={{ width: `132px`, height: `190px` }}
                        >
                          <Image
                            src={`/heroesPng/${
                              player.heroid ? player.heroid : "teamLogo2"
                            }.png`}
                            alt=""
                            className="object-cover z-10"
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
                              player?.ban_heroid
                                ? player.ban_heroid
                                : "teamLogo2"
                            }.png`}
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
