"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const KillEvent = (props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        console.log("props kill event :", props.data);
        setMounted(true);
        setTimeout(() => {
            setMounted(false);
        }, 3000);
        clearTimeout();
    }, []);
    return (
        <div className="h-screen top-0 left-0 w-screen absolute z-10">
            <div className="absolute w-full bottom-0 h-1/3 flex justify-center overflow-y-hidden">
                <div
                    className={`${
                        mounted ? "translate-y-0 opacity-100" : "translate-y-0 opacity-0"
                    } relative h-full ease-in-out transition-all transform duration-3000 w-96`}>
                    <video
                        autoPlay
                        className="w-full h-full"
                        muted
                        src={`/assets/${props.data}.mp4`}
                    />
                </div>
                <style jsx>{`
                    .duration-3000 {
                        transition-duration: 500ms;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default KillEvent;
