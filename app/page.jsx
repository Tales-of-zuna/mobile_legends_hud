"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PictureComponent from "@/components/screens/pictureComponent";
import VideoComponent from "@/components/screens/videoComponent";

const Home = () => {
  let socket;
  const [data, setData] = useState([]);
  const [type, setType] = useState();
  const socketInit = async () => {
    socket = io("http://10.22.224.222:8080");
    socket.on("connect", () => {
      console.log("Successfully connected");
    });
    socket.on("player stats", (data) => {
      setData(data);
      console.log(data);
      setType("video");
    });
    socket.on("team head to head", (data) => {
      setData(data);
      setType("picture");
    });
  };
  useEffect(() => {
    socketInit();
  }, []);

  const displayComponents = (name) => {
    if (name === "video") {
      return <VideoComponent data={data.data} />;
    } else if (name === "picture") {
      return <PictureComponent />;
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
