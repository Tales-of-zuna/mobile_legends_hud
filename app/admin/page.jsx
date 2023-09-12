"use client";
import { useEffect } from "react";
import io from "socket.io-client";
let socket;
const Admin = () => {
  const socketInit = async () => {
    await fetch("/api/socket");
    socket = io();
  };
  useEffect(() => {
    socketInit();
  }, []);

  return (
    <div className=" min-h-screen bg-slate-100 flex justify-center items-center">
      <div className=" p-16 text-4xl font-bold text-slate-700 rounded-xl bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300">
        Hello Admin!
      </div>
    </div>
  );
};

export default Admin;
