import Image from "next/image";
import { useEffect } from "react";

const InGameOverlay = (props) => {
  console.log("props :", props);
  const team1Score = () => {
    if (String(props.teamScore?.bestOf) == "BO3") {
      if (String(props.teamScore?.team1) == "0") {
        return (
          <div className="flex  gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      }
    } else if (String(props.teamScore?.bestOf) == "BO5") {
      if (String(props.teamScore?.team1) == "0") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "2") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      }
    } else if (String(props.teamScore?.bestOf) == "BO7") {
      if (String(props.teamScore?.team1) == "0") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "2") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team1) == "3") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      }
    }
  };
  const team2Score = () => {
    if (String(props.teamScore?.bestOf) == "BO3") {
      if (String(props.teamScore?.team2) == "0") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      }
    } else if (String(props.teamScore?.bestOf) == "BO5") {
      if (String(props.teamScore?.team2) == "0") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "2") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      }
    } else if (String(props.teamScore?.bestOf) == "BO7") {
      if (String(props.teamScore?.team2) == "0") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "1") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "2") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      } else if (String(props.teamScore?.team2) == "3") {
        return (
          <div className="flex gap-1">
            <div className="w-2 h-5 rounded-sm bg-black"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
            <div className="w-2 h-5 rounded-sm bg-red-600"></div>
          </div>
        );
      }
    }
  };
  return (
    <div className="w-screen h-screen montser flex items-center justify-center">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
        .montser {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
      <div className="w-full relative h-full">
        <video
          autoPlay
          loop
          className="w-full h-full"
          muted
          src="/assets/in_game_overlay.mp4"
        />
        <div className="absolute w-full text-black font-bold text-xl justify-center top-0 z-10 flex ">
          <div className="flex" style={{ width: `1230px`, height: `110px` }}>
            <div className="h-full relative " style={{ width: `85px` }}>
              <Image
                fill
                alt=""
                className="object-contain"
                src={
                  "/teams/" +
                  props.data?.camp_list[0].team_id +
                  "/logoblack.png"
                }
              />
            </div>
            <div className="h-full relative " style={{ width: `430px` }}>
              <div className="h-1/2 text-3xl flex items-center px-6">
                <div
                  className="h-full pl-9  flex items-center "
                  style={{ width: `91px` }}
                >
                  {props.data?.camp_list[0].kill_tortoise}
                  {String(props.teamScore?.team2) == "3"}
                </div>
                <div
                  className="h-full pl-8 flex items-center "
                  style={{ width: `91px` }}
                >
                  {props.data?.camp_list[0].kill_lord}
                </div>
                <div
                  className="h-full pl-8 flex items-center "
                  style={{ width: `83px` }}
                >
                  {props.data?.camp_list[0].kill_tower}
                </div>
                <div
                  className="h-full pl-10 text-2xl flex items-center "
                  style={{ width: `117px` }}
                >
                  {props.data?.camp_list[0].total_money}
                </div>
              </div>
              <div className="h-1/2 flex gap-4 items-center justify-end px-8">
                <p>
                  <p>{props.data?.camp_list[0].team_name}</p>
                </p>
                {team1Score()}
              </div>
            </div>
            <div
              className="h-1/2 pt-4 pr-2 flex justify-center  items-center text-4xl "
              style={{ width: `65px` }}
            >
              <p>{props.data?.camp_list[0].score}</p>
            </div>

            {/* team 1 -------------------------------------------------------------------------- */}

            <div className="" style={{ width: `110px` }}>
              <div className="h-1/2 flex items-center justify-center">
                {Math.floor(props.data?.game_time / 60)}:
                {String(props.data?.game_time % 60).length == 1
                  ? "0" + (props.data?.game_time % 60)
                  : props.data?.game_time % 60}
              </div>
            </div>

            {/* team 2 -------------------------------------------------------------------------- */}
            <div
              className="h-1/2 flex pt-4 pl-2 justify-center items-center text-4xl "
              style={{ width: `65px` }}
            >
              <p>{props.data?.camp_list[1].score}</p>
            </div>
            <div className="h-full relative " style={{ width: `430px` }}>
              <div className="h-1/2 text-3xl flex items-center px-6">
                <div
                  className="h-full pl-11 text-2xl flex items-center "
                  style={{ width: `146px` }}
                >
                  {props.data?.camp_list[1].total_money}
                </div>
                <div
                  className="h-full pl-8 flex items-center "
                  style={{ width: `89px` }}
                >
                  {props.data?.camp_list[1].kill_tower}
                </div>
                <div
                  className="h-full pl-8 flex items-center "
                  style={{ width: `90px` }}
                >
                  {props.data?.camp_list[1].kill_lord}
                </div>
                <div
                  className="h-full w-full pl-7 flex items-center "
                  style={{ width: `60px` }}
                >
                  {props.data?.camp_list[1].kill_tortoise}
                </div>
              </div>
              <div className="h-1/2 flex px-8 gap-4 items-center">
                {team2Score()}
                <p>{props.data?.camp_list[1].team_name}</p>
              </div>
            </div>
            <div className="h-full relative " style={{ width: `85px` }}>
              <Image
                fill
                alt=""
                className="object-contain"
                src={
                  "/teams/" +
                  props.data?.camp_list[1].team_id +
                  "/logoblack.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InGameOverlay;
