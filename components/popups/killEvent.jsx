"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const KillEvent = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setMounted(false);
    }, 8000);
    clearTimeout();
  }, []);
  return (
    <div className="h-screen top-0 left-0 w-screen absolute z-10">
      <div className="absolute w-full bottom-0 h-1/3 flex justify-center overflow-y-hidden">
        <div
          className={`${
            mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } relative h-full ease-in-out transition-all transform duration-8000 w-52`}
        >
          <Image
            className="object-contain"
            fill
            alt=""
            src={"/assets/lord.jpg"}
          />
        </div>
        <style jsx>{`
          .duration-8000 {
            transition-duration: 3000ms;
          }
        `}</style>
      </div>
    </div>
  );
};

export default KillEvent;
