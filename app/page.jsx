"use client";

import DraftingOverlay from "@/components/screens/draftingOverlay";
import InGameOverlay from "@/components/screens/inGameOverlay";
import InGameStat from "@/components/screens/inGameStat";
import ItemBuild from "@/components/screens/itemBuild";
import PlayerStatsFull from "@/components/screens/playerStatsFull";
import PlayerStatsLower from "@/components/screens/playerStatsLower";
import RealTimeVictoryDefeatRate from "@/components/screens/realTimeVictoryDefeatRate";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  async function fetchWithTimeout(resource, options = {}) {
    await new Promise((r) => setTimeout(r, 5000));
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  }

  async function getBattleDataRecursive(payload) {
    try {
      const response = await fetchWithTimeout(
        "http://esportsdata.mobilelegends.com:30260/battledata?authkey=6646f93ab8cf795f3f78a7ed73469cf7&battleid=696401121647981998&dataid=0",
        { timeout: 2000 }
      );
      const data = await response.json();
      data.data.incre_event_list.map((item) => {
        if (
          item.event_type == "kill_hero" &&
          item.extra_param &&
          item.extra_param[0] == "first_blood"
        ) {
          // const array = [];
          // array.push(item);
          // setData(item);
          // setType("FirstBlood");
          setIsOpen(true);
          hideIsOpen(10000);
        }
      });

      // console.log(new Date());
      // console.log(data);
    } catch (error) {
      console.log(error.name);
    } finally {
      getBattleDataRecursive(payload);
    }
  }

  const hideIsOpen = async (duration) => {
    await new Promise((r) => setTimeout(r, duration));
    setIsOpen(false);
  };

  useEffect(() => {
    let payload = {
      authkey: "6646f93ab8cf795f3f78a7ed73469cf7",
      battleid: "165489743059134510",
      dataid: 0,
    };

    getBattleDataRecursive(payload);
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    content: {
      top: "auto",
      left: "50%",
      right: "auto",
      bottom: "0%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const displayComponents = (name) => {
    if (name === "draftingOverlay") {
      return <DraftingOverlay data={data.data} />;
    } else if (name === "InGameOverlay") {
      return <InGameOverlay data={data.data} />;
    } else if (name === "RealTimeVictoryDefeatRate") {
      return <RealTimeVictoryDefeatRate data={data.data} />;
    } else if (name === "ItemBuild") {
      return <ItemBuild data={data.data} />;
    } else if (name === "PlayerStatsFull") {
      return <PlayerStatsFull data={data.data} />;
    } else if (name === "PlayerStatsLower") {
      return <PlayerStatsLower data={data.data} />;
    } else if (name === "FirstBlood") {
      return <InGameStat data={data} />;
    }
  };
  const showPopup = (name) => {
    // if (name === "video") {
    //   return <VideoComponent data={data.data} />;
    // } else if (name === "picture") {
    //   return <PictureComponent />;
    // }
  };
  return (
    <div className="h-screen bg-green-500">
      {/* <div className="h-full">{displayComponents(type)}</div> */}
      {/* <div>{showPopup(name)}</div> */}
      {/* <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <Image
          alt=""
          fill="true"
          className="object-contain h-44"
          src={"/assets/tortoise.jpg"}
        />
      </Modal> */}

      <div
        className={` absolute  overflow-hidden  bottom-0 w-full flex justify-center`}
      >
        <div
          className={` ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } h-96 relative w-96 transition-all transform duration-popup ease-in-out`}
        >
          <Image
            alt=""
            fill
            className="object-contain rounded-t-lg"
            src={"/assets/tortoise.jpg"}
          />
        </div>
      </div>
      <style jsx>
        {`
          .duration-popup {
            transition-duration: 3000ms;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
