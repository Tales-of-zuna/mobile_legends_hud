import { useEffect, useState } from "react";

const HeadToHeadComponent = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // setData(props.data);
    }, []);

    return (
        // <div className="h-full w-screen bg-green-500 absolute">
        <div className=" w-2/4 absolute m-auto bottom-0 left-0 right-0 bg-slate-100 flex justify-around h-auto rounded-xl shadow-lg">
            <div className="flex flex-col w-full">
                <div className="grid grid-cols-3 gap-4 justify-items-center m-5 text-black">
                    {[0, 0, 0, 0].map((item, index) => {
                        return (
                            <>
                                <div className="flex w-full">
                                    <div className="w-1/6 mr-4">5.43</div>
                                    <div className="flex flex-row-reverse w-5/6 h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="h-4 bg-red-600 rounded-full dark:bg-red-500"
                                            style={{ width: "70%" }}></div>
                                    </div>
                                </div>

                                <div className="rounded-xl mb-4 shadow-lg w-48 text-center font-mono text-lg">
                                    {index == 0
                                        ? "KDA"
                                        : index === 1
                                        ? "GPM"
                                        : index === 2
                                        ? "PARTICIPATION RATE"
                                        : index === 3
                                        ? "DAMAGE TO HEROES"
                                        : ""}
                                </div>

                                <div className="flex flex-row w-full">
                                    <div className="w-5/6 h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div
                                            className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
                                            style={{ width: "90%" }}></div>
                                    </div>
                                    <div className="w-1/6 ml-4">5.43</div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
        // </div>
    );
};

export default HeadToHeadComponent;
