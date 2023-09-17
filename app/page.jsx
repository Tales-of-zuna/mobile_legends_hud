"use client";

import RealTimeVictoryDefeatRate from "@/components/popups/realTimeVictoryDefeatRate";
import DraftingOverlay from "@/components/screens/draftingOverlay";
import InGameOverlay from "@/components/screens/inGameOverlay";
// import InGameStat from "@/components/screens/InGameStat";
import ItemBuild from "@/components/screens/itemBuild";
import PlayerStatsFull from "@/components/screens/playerStatsFull";
import PlayerStatsLower from "@/components/screens/playerStatsLower";

import HeadToHeadComponent from "@/components/popups/hdhComponent";
import InGameStat from "@/components/popups/inGameStat";
import IndiPlayerStats from "@/components/popups/indiPlayerStats";
import LordCam from "@/components/popups/lordCam";
import TurtleCam from "@/components/popups/turtleCam";
import TeamGoldDifference from "@/components/popups/teamGoldDifference";
// import RealTimeVictoryDefeatRate from "@/components/popups/realTimeVictoryDefeatRate";
import KillEventComp from "@/components/popups/killEvent";

import React, { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);
    const [type, setType] = useState("");
    const [popUpType, setPopUpType] = useState();
    const [commandType, setCommandType] = useState("");
    const [turtleState, setTurtleState] = useState(false);
    const [lordState, setLordState] = useState(false);
    const [battleId, setBattleId] = useState();
    const [teamScore, setTeamScore] = useState();

    const bc = new BroadcastChannel("admin");

    const turtleTimer = () => {
        setTurtleState(true);

        setTimeout(() => {
            setTurtleState(false);
        }, 5000);
    };

    const lordTimer = () => {
        setTurtleState(true);

        setTimeout(() => {
            setTurtleState(false);
        }, 5000);
    };

    async function fetchWithTimeout(resource, options = {}) {
        await new Promise((r) => setTimeout(r, 3000));
        const { timeout = 8000 } = options;

        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(resource, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(id);

        return response;
    }

    async function getBattleDataRecursive(payload) {
        console.log("payload :", payload);
        // let payload = {
        //     authkey: "6646f93ab8cf795f3f78a7ed73469cf7",
        //     battleid: "",
        //     dataid: 0,
        // };

        try {
            const response = await fetchWithTimeout(
                "http://esportsdata.mobilelegends.com:30260/battledata?authkey=6646f93ab8cf795f3f78a7ed73469cf7&battleid=" +
                    payload?.battleId +
                    "&dataid=0",
                { timeout: 2000 }
            );
            const data = await response.json();

            if (data.message == "success") {
                setData(data);
                setType("draftingOverlay");
            }

            if (data.data.tortoise_left_time == 1 || 2) {
                if (!turtleState) {
                    setPopUpType("turtle cam");
                    turtleTimer();
                }
            }

            if (data.data.lord_left_time == 1 || 2) {
                if (!lordState) {
                    setPopUpType("lord cam");
                    lordTimer();
                }
            }

            data.data.incre_event_list.map(async (item) => {
                if (
                    item.event_type == "kill_hero" &&
                    item.extra_param
                    // item.extra_param[0] == "first_blood"
                ) {
                    setPopUpType(item.extra_param[0]);
                }
            });

            // console.log(new Date());
            // console.log(data);
        } catch (error) {
            console.log(error.name);
        } finally {
            getBattleDataRecursive(payload);
        }
    }

    useEffect(() => {
        bc.onmessage = (event) => {
            if (event.data.type == "draftingOverlay") {
                setTeamScore(event.data.data);
                getBattleDataRecursive(event.data.data);
                // setType(event.data.type);
            } else if (event.data.type == "state-update-screen") {
                console.log("event from broadcast :", event);
                setType(event.data.data);
            } else if (event.data.type == "state-false-screen") {
                setType(null);
            } else if (event.data.type == "state-update-popup") {
                setPopUpType(event.data.data);
            } else if (event.data.type == "state-false-popup") {
                setPopUpType(null);
            }
        };
    }, []);

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(255, 255, 255, 0)",
        },
        content: {
            top: "auto",
            left: "50%",
            right: "auto",
            bottom: "0%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    const displayComponents = (name) => {
        if (name === "draftingOverlay") {
            return <DraftingOverlay data={data.data} />;
        } else if (name === "InGameOverlay") {
            return <InGameOverlay data={data.data} />;
        }

        // else if (name === "RealTimeVictoryDefeatRate") {
        //   return <RealTimeVictoryDefeatRate data={data.data} />;
        // }
        else if (name === "ItemBuild") {
            return <ItemBuild data={data.data} />;
        } else if (name === "PlayerStatsFull") {
            return <PlayerStatsFull data={data.data} />;
        } else if (name === "PlayerStatsLower") {
            return <PlayerStatsLower data={data.data} />;
        } else if (name === "FirstBlood") {
            return <InGameStat data={data} />;
        }
    };

    const showPopup = (popUptype) => {
        if (popUptype == "individual player stats") {
            return <IndiPlayerStats />;
        } else if (popUptype == "in game stats head to head") {
            return <HeadToHeadComponent />;
        } else if (popUptype == "in game stat") {
            return <InGameStat />;
        } else if (popUptype == "turtle cam") {
            return <TurtleCam />;
        } else if (popUptype == "lord cam") {
            return <LordCam />;
        } else if (popUptype == "real time victory defeat rate") {
            return <RealTimeVictoryDefeatRate />;
        } else if (popUptype == "team gold difference") {
            return <TeamGoldDifference />;
        } else if (
            popUptype == "first_blood" ||
            popUptype == "double_kill" ||
            popUptype == "triple_kill" ||
            popUptype == "quadra_kill" ||
            popUptype == "penta_kill"
        ) {
            return <KillEventComp data={popUptype} />;
        }
    };
    return (
        <div className="h-screen bg-green-500">
            <div className="h-full">
                {displayComponents(type)}
                {showPopup(popUpType)}
            </div>
        </div>
    );
};

export default Home;
