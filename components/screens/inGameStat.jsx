import Image from "next/image";
const InGameStat = (props) => {
    console.log("IN GAME STAT: " + JSON.stringify(props.data));
    return (
        <div className="h-screen bg-yellow-500">
            <Image alt="" fill className="object-contain h-44" src={"/assets/tortoise.png"} />
        </div>
    );
};

export default InGameStat;
