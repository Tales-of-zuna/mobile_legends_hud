"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PictureComponent from "@/components/pictureComponent";
import VideoComponent from "@/components/videoComponent";

const SocketPage = () => {
  let socket;

  const [data, setData] = useState([]);

  const [campList1, setCampList1] = useState([]);
  const [campList2, setCampList2] = useState([]);
  const [type, setType] = useState();

  useEffect(() => {
    socketInit();
    setCampList1();
    setCampList2();
  }, []);

  const socketInit = async () => {
    socket = io("http://10.22.224.222:8080");
    socket.on("connect", () => {
      console.log("Successfully connected");
    });

    socket.on("battle list", (data) => {
      setData(data);
      setType("video");
    });

    socket.on("battle lost", (data) => {
      setData(data);
      setType("picture");
    });
  };

  const displayComponents = (name) => {
    if (name === "video") {
      return <VideoComponent data={data} />;
    } else if (name === "picture") {
      return <PictureComponent />;
    }
  };

  return <div className="h-screen bg-green-500">{displayComponents(type)}</div>;
};

export default SocketPage;
