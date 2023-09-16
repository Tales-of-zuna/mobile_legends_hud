import { useEffect, useState } from "react";

const killEventComp = (props) => {
    const [state, setState] = useState(false);

    const [data, setData] = useState();

    useEffect(() => {
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 5000);
    }, []);

    return (
        <div
            className={`${
                state ? "translate-y-0" : " translate-y-full"
            } absolute bottom-0 transition-all transform duration-1000 ease-in-out right-0 left-0 text-slate-950`}>
            {props.data}
        </div>
    );
};

export default killEventComp;
