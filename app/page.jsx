"use client";
import DraftingOverlay from "@/components/screens/draftingOverlay";
import InGameOverlay from "@/components/screens/inGameOverlay";
import ItemBuild from "@/components/screens/itemBuild";
import PlayerStatsFull from "@/components/screens/playerStatsFull";
import PlayerStatsLower from "@/components/screens/playerStatsLower";
import RealTimeVictoryDefeatRate from "@/components/screens/realTimeVictoryDefeatRate";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Home = () => {
  let socket;
  const [data, setData] = useState([]);
  const [type, setType] = useState();
  const socketInit = async () => {
    socket = io("http://10.22.224.220:8080");
    socket.on("connect", () => {
      console.log("Successfully connected");
    });
    socket.on("player stats full", (data) => {
      setData(data);
      setType("playerStatsFull");
    });
    socket.on("player stats lower", (data) => {
      setData(data);
      setType("playerStatsLower");
    });
  };
  useEffect(() => {
    socketInit();
  }, []);

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
      <div className="h-full">{displayComponents(type)}</div>
      {/* <div>{showPopup(name)}</div> */}
    </div>
  );
};

export default Home;
