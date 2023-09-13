"use client";
import { Image } from "@nextui-org/react";

const PictureComponent = () => {
  return (
    <div className="h-full w-screen bg-green-500 absolute">
      <div className=" w-full absolute bottom-0 bg-slate-200 flex justify-around items-center h-96">
        <div className=" bg-white rounded-xl shadow-lg p-5">Hello</div>
        <div className=" bg-white rounded-xl shadow-lg p-5">Hello</div>
        <div className=" bg-white rounded-xl shadow-lg p-5">Hello</div>
        <div className=" bg-white rounded-xl shadow-lg p-5">Hello</div>
        <div className=" bg-white rounded-xl shadow-lg p-5">Hello</div>
      </div>
    </div>
  );
};

export default PictureComponent;
