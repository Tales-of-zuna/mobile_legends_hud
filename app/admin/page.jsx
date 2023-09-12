"use client";
import { Switch, select } from "@nextui-org/react";
import { useState } from "react";

const Admin = () => {
  const commands = [{ command: "ban" }];
  const [selected, setSelected] = useState(false);
  const swtitching = (name, idx) => {
    return (
      <div className="col-span-1 space-y-2">
        <p>
          {idx + 1}.{name} {String(selected)}
        </p>
        <Switch
          onChange={async () => {
            if (selected) {
              await fetch("/api/ban", {});
            }
            setSelected(!selected);
          }}
          color="success"
          className="m-0"
          size="lg"
        />
      </div>
    );
  };
  return (
    <div className=" h-screen grid grid-cols-4 gap-4 text-slate-700 bg-slate-100  p-16 justify-center items-center">
      <div className="p-8 col-span-3 xl font-bold  uppercase gap-4  grid grid-cols-8 w-full rounded-xl bg-white shadow-lg  transition-all transform duration-300">
        {swtitching("banana", 1)}
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
