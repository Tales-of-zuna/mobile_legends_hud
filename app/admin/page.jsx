"use client";
import { Switch, select } from "@nextui-org/react";
import { useState } from "react";

const Admin = () => {
  const [selected, setSelected] = useState([]);
  const [list, setList] = useState([
    {
      name: "battle list",
      status: false,
    },
    {
      name: "battle lost",
      status: false,
    },
    {
      name: "battle lust",
      status: false,
    },
    {
      name: "battle last",
      status: false,
    },
  ]);

  const swtitching = (name, idx) => {
    return (
      <div className="col-span-1 space-y-2">
        <p>
          {idx + 1}.{name}
        </p>
        <Switch
          onChange={async () => {
            await fetch("http://10.22.224.222:8080/battle", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                status: true,
              }),
            });
          }}
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <title>broadcast</title>
              <path d="M12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10M18 12C18 8.7 15.3 6 12 6S6 8.7 6 12C6 14.2 7.2 16.1 9 17.2L10 15.5C8.8 14.8 8 13.5 8 12.1C8 9.9 9.8 8.1 12 8.1S16 9.9 16 12.1C16 13.6 15.2 14.9 14 15.5L15 17.2C16.8 16.2 18 14.2 18 12M12 2C6.5 2 2 6.5 2 12C2 15.7 4 18.9 7 20.6L8 18.9C5.6 17.5 4 14.9 4 12C4 7.6 7.6 4 12 4S20 7.6 20 12C20 15 18.4 17.5 16 18.9L17 20.6C20 18.9 22 15.7 22 12C22 6.5 17.5 2 12 2Z" />
            </svg>
          }
          endContent={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>broadcast-off</title>
              <path d="M17.6 14.2C17.9 13.5 18 12.8 18 12C18 8.7 15.3 6 12 6C11.2 6 10.4 6.2 9.8 6.4L11.4 8H12C14.2 8 16 9.8 16 12C16 12.2 16 12.4 15.9 12.6L17.6 14.2M12 4C16.4 4 20 7.6 20 12C20 13.4 19.6 14.6 19 15.7L20.5 17.2C21.4 15.7 22 13.9 22 12C22 6.5 17.5 2 12 2C10.1 2 8.3 2.5 6.8 3.5L8.3 5C9.4 4.3 10.6 4 12 4M3.3 2.5L2 3.8L4.1 5.9C2.8 7.6 2 9.7 2 12C2 15.7 4 18.9 7 20.6L8 18.9C5.6 17.5 4 14.9 4 12C4 10.2 4.6 8.6 5.5 7.3L7 8.8C6.4 9.7 6 10.8 6 12C6 14.2 7.2 16.1 9 17.2L10 15.5C8.8 14.8 8 13.5 8 12.1C8 11.5 8.2 10.9 8.4 10.3L10 11.9V12.1C10 13.2 10.9 14.1 12 14.1H12.2L19.7 21.6L21 20.3L4.3 3.5L3.3 2.5Z" />
            </svg>
          }
          color="success"
          size="lg"
        />
      </div>
    );
  };
  return (
    <div className=" h-screen grid grid-cols-4 gap-4 text-slate-700 bg-slate-100  p-16 justify-center items-center">
      {selected}
      <div className="p-8 col-span-3 xl font-bold  uppercase gap-4  grid grid-cols-8 w-full rounded-xl bg-white shadow-lg  transition-all transform duration-300">
        {list.map((item, idx) => {
          return swtitching(item.name, idx);
        })}
      </div>
      <div className="col-span-1 font-semibold bg-white shadow-lg h-full rounded-xl space-y-4 p-8">
        <div className="h-1/3 space-y-4 overflow-auto">
          <p className="text-xl">Currently ON</p>
          <div className=" flex text-white gap-2 capitalize text-sm flex-wrap">
            <div className="rounded-full font-bold py-1 px-2 bg-green-500">
              Ban phase
            </div>
            <div className="rounded-full font-bold py-1 px-2 bg-green-500">
              Ban phase
            </div>
            <div className="rounded-full font-bold py-1 px-2 bg-green-500">
              Ban phase
            </div>
          </div>
        </div>
        <div className="h-2/3 space-y-4">
          <p className="text-xl">Commands</p>
          <div className=" text-slate-400">
            <p className="hover:text-slate-800 hover:translate-x-2 transition-all transform duration-300">
              1.Ban phase (banning)
            </p>
            <p className="hover:text-slate-800 hover:translate-x-2 transition-all transform duration-300">
              1.Ban phase (banning)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
