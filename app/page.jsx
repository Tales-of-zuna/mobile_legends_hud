"use client";

import RealTimeVictoryDefeatRate from "@/components/popups/realTimeVictoryDefeatRate";
import DraftingOverlay from "@/components/screens/draftingOverlay";
import InGameOverlay from "@/components/screens/inGameOverlay";
import ItemBuild from "@/components/screens/itemBuild";
import PlayerStatsFull from "@/components/screens/playerStatsFull";
import PlayerStatsLower from "@/components/screens/playerStatsLower";
import HeadToHeadComponent from "@/components/popups/hdhComponent";
import InGameStat from "@/components/popups/inGameStat";
import IndiPlayerStats from "@/components/popups/indiPlayerStats";
import LordCam from "@/components/popups/lordCam";
import TurtleCam from "@/components/popups/turtleCam";
import TeamGoldDifference from "@/components/popups/teamGoldDifference";
import KillEventComp from "@/components/popups/killEvent";
import PromoCodeComponent from "@/components/popups/promoCodeComponent";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");
  const [popUpType, setPopUpType] = useState("");
  const [commandType, setCommandType] = useState("");
  const [turtleState, setTurtleState] = useState(false);
  const [lordState, setLordState] = useState(false);
  const [battleId, setBattleId] = useState();
  const [teamScore, setTeamScore] = useState();
  const [banpickState, setBanpickState] = useState(false);
  const [playState, setPlayState] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [popUpState, setPopUpState] = useState(false);
  const bc = new BroadcastChannel("admin");

  const turtleTimer = () => {
    setTurtleState(true);

    setTimeout(() => {
      setTurtleState(false);
    }, 5000);
  };

  const lordTimer = () => {
    setLordState(true);

    setTimeout(() => {
      setLordState(false);
    }, 5000);
  };

  const popUpTimer = () => {
    setPopUpState(true);

    setTimeout(() => {
      setPopUpState(false);
      setPopUpType("");
    }, 3000);
  };

  async function fetchWithTimeout(resource, options = {}) {
    await new Promise((r) => setTimeout(r, 300));
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

  useEffect(() => {}, []);

  //on Message
  bc.onmessage = (event) => {
    if (event.data.type == "draftingOverlay") {
      setData([]);
      setType("");
      setPopUpType("");
      setCommandType("");
      setTurtleState(false);
      setLordState(false);
      setBattleId(null);
      setTeamScore(null);
      setBanpickState(false);
      setPlayState(false);
      console.log("data fom admin" + event.data.data.battleId);
      setTeamScore(event.data.data);
      let payload = {
        battleId:
          // "608204114254271443",
          event.data.data.battleId,
        dataid: 0,
      };
      getBattleDataRecursive(payload);
      // setType(event.data.type);
    }
    if (event.data.type == "state-update-screen") {
      console.log("event from broadcast :", event);
      setType(event.data.data);
    } else if (event.data.type == "state-false-screen") {
      setType(null);
    }

    if (event.data.type == "state-update-popup") {
      setPopUpType(event.data.data);
      setPromoCode(event.data.code);
    } else if (event.data.type == "state-false-popup") {
      setPopUpType(null);
    }
  };
  async function getBattleDataRecursive(payload) {
    let data;
    console.log("id" + payload?.battleId);
    try {
      const response = await fetchWithTimeout(
        "http://esportsdata.mobilelegends.com:30260/battledata?authkey=6646f93ab8cf795f3f78a7ed73469cf7&battleid=" +
          payload?.battleId +
          "&dataid=" +
          payload?.dataid,
        { timeout: 2000 }
      );

      data = await response.json();

      // setData(data);
      console.log(data.data.state);

      if (data.data.state === "pick" || data.data.state === "ban") {
        setData(data);
        if (!banpickState) {
          setType("draftingOverlay");
        }
        setBanpickState(true);
      }

      if (data.data.state === "play") {
        setData(data);
        if (!playState) {
          setType("inGameOverlay");
        }
        setPlayState(true);
      }

      if (data.data.state === "pause") {
      }

      // if (data.data.state == "end") {
      //     setType("");
      //     setPopUpType("");
      // }

      // if (data.data.state == "adjust" || data.data.state == "loading") {
      //     setType("");
      //     setPopUpType("");
      // }

      // if (data.data.state == "end") {
      //     // setData(data);
      //     setType(null);
      //     setPopUpType(null);
      // }

      // if (data.data.tortoise_left_time == 1 || data.data.tortoise_left_time == 2) {
      //     if (!turtleState) {
      //         console.log("turtle");
      //         setPopUpType("turtle cam");
      //         turtleTimer();
      //     }
      // }

      // if (data.data.lord_left_time == 1 || data.data.lord_left_time == 2) {
      //     if (!lordState) {
      //         console.log("lord turluuu");
      //         setPopUpType("lord cam");
      //         lordTimer();
      //     }
      // }

      if (data.data.incre_event_list != null) {
        data.data.incre_event_list.map((item) => {
          console.log(item);
          if (
            item.event_type == "kill_hero" &&
            item.extra_param != undefined
            // item.extra_param[0] == "first_blood"
          ) {
            console.log("EXTRA PARAM :", item.extra_param[0]);
            if (!popUpState) {
              setPopUpType(item.extra_param[0]);
              popUpTimer();
            }
          }
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("state in finally: " + data.data.state);
      // console.log("dataid: " + data.dataid);

      if (data.data.state != "end") {
        let payloadInitial = {
          dataid: data.dataid,
          battleId: payload.battleId,
        };
        getBattleDataRecursive(payloadInitial);
      }
    }
  }

  const displayComponents = (name) => {
    if (name === "draftingOverlay") {
      return <DraftingOverlay data={data.data} />;
    } else if (name === "inGameOverlay") {
      return <InGameOverlay teamScore={teamScore} data={data.data} />;
    }

    // else if (name === "RealTimeVictoryDefeatRate") {
    //   return <RealTimeVictoryDefeatRate data={data.data} />;
    // }
    // else if (name === "ItemBuild") {
    //     return <ItemBuild data={data.data} />;
    // } else if (name === "PlayerStatsFull") {
    //     return <PlayerStatsFull data={data.data} />;
    // } else if (name === "PlayerStatsLower") {
    //     return <PlayerStatsLower data={data.data} />;
    // } else if (name === "FirstBlood") {
    //     return <InGameStat data={data} />;
    // }
  };

  const showPopup = (popUptype) => {
    // if (popUptype == "individual player stats") {
    //     return <IndiPlayerStats data={data.data} />;
    // } else if (popUptype == "in game stats head to head") {
    //     return <HeadToHeadComponent data={data.data} />;
    // } else if (popUptype == "in game stat") {
    //     return <InGameStat data={data.data} />;
    // } else if (popUptype == "turtle cam") {
    //     return <TurtleCam data={data.data} />;
    // } else if (popUptype == "lord cam") {
    //     return <LordCam data={data.data} />;
    // } else if (popUptype == "real time victory defeat rate") {
    //     return <RealTimeVictoryDefeatRate data={data.data} />;
    // } else if (popUptype == "team gold difference") {
    //     return <TeamGoldDifference data={data.data} />;
    if (
      popUptype == "first_blood" ||
      popUptype == "double_kill" ||
      popUptype == "triple_kill" ||
      popUptype == "quadra_kill" ||
      popUptype == "penta_kill"
    ) {
      return <KillEventComp data={popUptype} />;
    } else if (popUpType == "promo code") {
      return <PromoCodeComponent promoCode={promoCode} />;
      // <KillEventComp data={"first_blood"} />;
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
