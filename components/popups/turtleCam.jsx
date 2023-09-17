import { useEffect, useState } from "react";
const turtleCam = (props) => {
  const [state, setState] = useState(false);

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
      } absolute bottom-0 transition-all transform duration-1000 ease-in-out right-0 left-0 text-slate-950`}
    >
      Turtle came
    </div>
  );
};

export default turtleCam;
