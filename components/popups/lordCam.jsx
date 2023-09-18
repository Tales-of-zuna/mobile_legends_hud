import { useEffect, useState } from "react";
const lordCam = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 5000);
    }, []);

    return (
        <div
            className={`absolute bottom-10 w-fit m-auto transition-all transform duration-1000 ease-in-out right-0 left-0 text-slate-950 `}>
            <p className="italic text-slate-100 text-center m-4 text-3xl">LORD CAM</p>
            <img
                className=" border-double rounded-3xl border-4 border-slate-100"
                src="/assets/lord.jpg"
                width={300}
                height={300}
            />
        </div>
    );
};

export default lordCam;
