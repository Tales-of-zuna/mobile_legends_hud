"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PictureComponent from "@/components/pictureComponent";
import VideoComponent from "@/components/videoComponent";

const SocketPage = () => {
  let socket;


const [data, setData] = useState([]);

const [campList1, setCampList1] = useState([]);
const [campList2, setCampList2] = useState([]);
const [type, setType]=useState("picture")




useEffect(()=> {
    socketInit();
    // setMockData();
    console.log("camp list", campList1);

},[])

  const socketInit = async () => {
    socket = io("http://10.22.224.222:8080");
    socket.on("connect", () => {
      console.log("Successfully connected");
    });

    socket.on("battle list",(data) => {

        setType("video");
       
    });


    socket.on("battle lost",(data) => {
        setType("picture")
       
    });
  };

const setMockData = async() => {
     await fetch("data.json").then((response)=>{
        console.log("response :", response)
     });   
    
    setCampList1([
        {
            "campid": 1,
            "team_name": "BloodThirstyKing",
            "team_simple_name": "BTK",
            "team_id": 10458,
            "score": 5,
            "kill_lord": 0,
            "kill_tower": 2,
            "total_money": 29356,
            "player_list": [
                {
                    "roleid": 1320398163,
                    "zoneid": 50001,
                    "name": "FwydChickn",
                    "team_name": "BloodThirstyKing",
                    "team_simple_name": "BTK",
                    "team_id": 10458,
                    "judger": false,
                    "campid": 1,
                    "pos": 1,
                    "banning": false,
                    "picking": false,
                    "ban_heroid": 17,
                    "heroid": 75,
                    "skillid": 20070,
                    "gold": 4347,
                    "exp": 7640,
                    "level": 10,
                    "total_hurt": 37757,
                    "total_damage": 14312,
                    "total_heal": 10814,
                    "total_damage_tower": 0,
                    "dead": false,
                    "revive_left_time": 0,
                    "major_left_time": 0,
                    "skill_left_time": 38,
                    "rune_id": 20005,
                    "kill_num": 1,
                    "dead_num": 5,
                    "assist_num": 0,
                    "rune_map": {
                        "1": 511,
                        "2": 1221,
                        "3": 631
                    },
                    "equip_list": [
                        3541,
                        3107,
                        2104,
                        2101
                    ],
                    "map_pos": {
                        "x": -47.984375,
                        "y": 0.11999512
                    },
                    "xpm": 700,
                    "hit_rate": null,
                    "gold_map": null
                },
                {
                    "roleid": 1320398178,
                    "zoneid": 50001,
                    "name": "MobaZane",
                    "team_name": "BloodThirstyKing",
                    "team_simple_name": "BTK",
                    "team_id": 10458,
                    "judger": false,
                    "campid": 1,
                    "pos": 2,
                    "banning": false,
                    "picking": false,
                    "ban_heroid": 6,
                    "heroid": 117,
                    "skillid": 20020,
                    "gold": 6248,
                    "exp": 12666,
                    "level": 13,
                    "total_hurt": 93610,
                    "total_damage": 20079,
                    "total_heal": 39155,
                    "total_damage_tower": 1274,
                    "dead": true,
                    "revive_left_time": 10,
                    "major_left_time": 0,
                    "skill_left_time": 0,
                    "rune_id": 20003,
                    "kill_num": 3,
                    "dead_num": 1,
                    "assist_num": 0,
                    "rune_map": {
                        "1": 811,
                        "2": 122,
                        "3": 132
                    },
                    "equip_list": [
                        3421,
                        3203,
                        3210,
                        2201,
                        1204,
                        1201
                    ],
                    "map_pos": {
                        "x": -19.417969,
                        "y": -8.277344
                    },
                    "xpm": 1162,
                    "hit_rate": null,
                    "gold_map": null
                },
                {
                    "roleid": 1390091180,
                    "zoneid": 50001,
                    "name": "ISO",
                    "team_name": "BloodThirstyKing",
                    "team_simple_name": "BTK",
                    "team_id": 10458,
                    "judger": false,
                    "campid": 1,
                    "pos": 3,
                    "banning": false,
                    "picking": false,
                    "ban_heroid": 3,
                    "heroid": 43,
                    "skillid": 20080,
                    "gold": 7178,
                    "exp": 10818,
                    "level": 12,
                    "total_hurt": 26124,
                    "total_damage": 23300,
                    "total_heal": 9349,
                    "total_damage_tower": 4881,
                    "dead": false,
                    "revive_left_time": 0,
                    "major_left_time": 0,
                    "skill_left_time": 0,
                    "rune_id": 20012,
                    "kill_num": 1,
                    "dead_num": 2,
                    "assist_num": 1,
                    "rune_map": {
                        "1": 1211,
                        "2": 321,
                        "3": 132
                    },
                    "equip_list": [
                        3002,
                        2305,
                        3003,
                        3005,
                        1001
                    ],
                    "map_pos": {
                        "x": -28.011719,
                        "y": -20.859375
                    },
                    "xpm": 992,
                    "hit_rate": null,
                    "gold_map": null
                },
                {
                    "roleid": 1390091114,
                    "zoneid": 50001,
                    "name": "Yatosenami",
                    "team_name": "BloodThirstyKing",
                    "team_simple_name": "BTK",
                    "team_id": 10458,
                    "judger": false,
                    "campid": 1,
                    "pos": 4,
                    "banning": false,
                    "picking": false,
                    "ban_heroid": 7,
                    "heroid": 52,
                    "skillid": 20080,
                    "gold": 5576,
                    "exp": 8721,
                    "level": 10,
                    "total_hurt": 30296,
                    "total_damage": 28863,
                    "total_heal": 3906,
                    "total_damage_tower": 0,
                    "dead": true,
                    "revive_left_time": 10,
                    "major_left_time": 0,
                    "skill_left_time": 0,
                    "rune_id": 20006,
                    "kill_num": 0,
                    "dead_num": 4,
                    "assist_num": 3,
                    "rune_map": {
                        "1": 511,
                        "2": 1221,
                        "3": 631
                    },
                    "equip_list": [
                        2304,
                        3107,
                        3110,
                        1101
                    ],
                    "map_pos": {
                        "x": -30.042969,
                        "y": -10.480469
                    },
                    "xpm": 800,
                    "hit_rate": [
                        {
                            "skillid": "5230",
                            "cast_times": 7,
                            "hit_times": 4
                        }
                    ],
                    "gold_map": null
                },
                {
                    "roleid": 1390091149,
                    "zoneid": 50001,
                    "name": "Tea",
                    "team_name": "BloodThirstyKing",
                    "team_simple_name": "BTK",
                    "team_id": 10458,
                    "judger": false,
                    "campid": 1,
                    "pos": 5,
                    "banning": false,
                    "picking": false,
                    "ban_heroid": 16,
                    "heroid": 95,
                    "skillid": 20070,
                    "gold": 6007,
                    "exp": 9906,
                    "level": 11,
                    "total_hurt": 44801,
                    "total_damage": 11417,
                    "total_heal": 9587,
                    "total_damage_tower": 1890,
                    "dead": false,
                    "revive_left_time": 0,
                    "major_left_time": 63,
                    "skill_left_time": 74,
                    "rune_id": 20007,
                    "kill_num": 0,
                    "dead_num": 3,
                    "assist_num": 0,
                    "rune_map": {
                        "1": 811,
                        "2": 721,
                        "3": 132
                    },
                    "equip_list": [
                        2302,
                        3009,
                        3206,
                        2205,
                        1001,
                        1001
                    ],
                    "map_pos": {
                        "x": -39.75,
                        "y": 0.55200195
                    },
                    "xpm": 908,
                    "hit_rate": null,
                    "gold_map": null
                }
            ],
            "ban_hero_list": [
                17,
                6,
                3,
                7,
                16
            ],
            "kill_lord_advantage": null,
            "enemy_area_get": [
                {
                    "end_time": 120,
                    "purple_buffer_num": 0,
                    "orange_buffer_num": 0,
                    "monster_gold": 132
                },
                {
                    "end_time": 300,
                    "purple_buffer_num": 0,
                    "orange_buffer_num": 0,
                    "monster_gold": 227
                },
                {
                    "end_time": 480,
                    "purple_buffer_num": 0,
                    "orange_buffer_num": 0,
                    "monster_gold": 0
                },
                {
                    "end_time": 655,
                    "purple_buffer_num": 0,
                    "orange_buffer_num": 1,
                    "monster_gold": 329
                }
            ],
            "kill_tortoise": 2
        },
        
    ]);

    setCampList2([{
        "campid": 2,
        "team_name": "TheOhioBrothers",
        "team_simple_name": "ToB",
        "team_id": 10460,
        "score": 15,
        "kill_lord": 1,
        "kill_tower": 7,
        "total_money": 37210,
        "player_list": [
            {
                "roleid": 1390091480,
                "zoneid": 50001,
                "name": "Hoon",
                "team_name": "TheOhioBrothers",
                "team_simple_name": "ToB",
                "team_id": 10460,
                "judger": false,
                "campid": 2,
                "pos": 6,
                "banning": false,
                "picking": false,
                "ban_heroid": 11,
                "heroid": 119,
                "skillid": 20080,
                "gold": 6829,
                "exp": 10520,
                "level": 11,
                "total_hurt": 10766,
                "total_damage": 34272,
                "total_heal": 1756,
                "total_damage_tower": 3855,
                "dead": false,
                "revive_left_time": 0,
                "major_left_time": 19,
                "skill_left_time": 0,
                "rune_id": 20005,
                "kill_num": 3,
                "dead_num": 1,
                "assist_num": 6,
                "rune_map": {
                    "1": 811,
                    "2": 121,
                    "3": 131
                },
                "equip_list": [
                    3107,
                    2304,
                    3110,
                    1105,
                    2101
                ],
                "map_pos": {
                    "x": -35.28125,
                    "y": -0.4710083
                },
                "xpm": 965,
                "hit_rate": [
                    {
                        "skillid": "11923",
                        "cast_times": 40,
                        "hit_times": 20
                    }
                ],
                "gold_map": null
            },
            {
                "roleid": 1390091499,
                "zoneid": 50001,
                "name": "bestplayer1",
                "team_name": "TheOhioBrothers",
                "team_simple_name": "ToB",
                "team_id": 10460,
                "judger": false,
                "campid": 2,
                "pos": 7,
                "banning": false,
                "picking": false,
                "ban_heroid": 1,
                "heroid": 47,
                "skillid": 20020,
                "gold": 9421,
                "exp": 16833,
                "level": 15,
                "total_hurt": 36427,
                "total_damage": 50926,
                "total_heal": 30088,
                "total_damage_tower": 7056,
                "dead": false,
                "revive_left_time": 0,
                "major_left_time": 0,
                "skill_left_time": 1,
                "rune_id": 20005,
                "kill_num": 6,
                "dead_num": 1,
                "assist_num": 7,
                "rune_map": {
                    "1": 511,
                    "2": 122,
                    "3": 531
                },
                "equip_list": [
                    3423,
                    1002,
                    2013,
                    2209,
                    3004,
                    2203
                ],
                "map_pos": {
                    "x": -39.46875,
                    "y": 1.5756836
                },
                "xpm": 0,
                "hit_rate": null,
                "gold_map": null
            },
            {
                "roleid": 1389451493,
                "zoneid": 50001,
                "name": "ZIA",
                "team_name": "TheOhioBrothers",
                "team_simple_name": "ToB",
                "team_id": 10460,
                "judger": false,
                "campid": 2,
                "pos": 8,
                "banning": false,
                "picking": false,
                "ban_heroid": 4,
                "heroid": 100,
                "skillid": 20100,
                "gold": 8833,
                "exp": 12766,
                "level": 13,
                "total_hurt": 23465,
                "total_damage": 29274,
                "total_heal": 11512,
                "total_damage_tower": 21983,
                "dead": false,
                "revive_left_time": 0,
                "major_left_time": 0,
                "skill_left_time": 0,
                "rune_id": 20005,
                "kill_num": 3,
                "dead_num": 1,
                "assist_num": 4,
                "rune_map": {
                    "1": 511,
                    "2": 321,
                    "3": 132
                },
                "equip_list": [
                    2206,
                    3007,
                    2302,
                    3001,
                    2011,
                    1006
                ],
                "map_pos": {
                    "x": -39.273438,
                    "y": 3.2841797
                },
                "xpm": 1171,
                "hit_rate": null,
                "gold_map": null
            },
            {
                "roleid": 1320398195,
                "zoneid": 50001,
                "name": "Mielow",
                "team_name": "TheOhioBrothers",
                "team_simple_name": "ToB",
                "team_id": 10460,
                "judger": false,
                "campid": 2,
                "pos": 9,
                "banning": false,
                "picking": false,
                "ban_heroid": 5,
                "heroid": 37,
                "skillid": 20100,
                "gold": 7019,
                "exp": 11541,
                "level": 12,
                "total_hurt": 51295,
                "total_damage": 24827,
                "total_heal": 25978,
                "total_damage_tower": 3619,
                "dead": false,
                "revive_left_time": 0,
                "major_left_time": 6,
                "skill_left_time": 118,
                "rune_id": 20007,
                "kill_num": 2,
                "dead_num": 2,
                "assist_num": 2,
                "rune_map": {
                    "1": 811,
                    "2": 721,
                    "3": 731
                },
                "equip_list": [
                    2302,
                    2004,
                    3206,
                    3010,
                    2203,
                    1201
                ],
                "map_pos": {
                    "x": -35.476562,
                    "y": -4.5371094
                },
                "xpm": 1058,
                "hit_rate": null,
                "gold_map": null
            },
            {
                "roleid": 1390091449,
                "zoneid": 50001,
                "name": "SUPERSHARK.",
                "team_name": "TheOhioBrothers",
                "team_simple_name": "ToB",
                "team_id": 10460,
                "judger": false,
                "campid": 2,
                "pos": 10,
                "banning": false,
                "picking": false,
                "ban_heroid": 15,
                "heroid": 111,
                "skillid": 20100,
                "gold": 5672,
                "exp": 9556,
                "level": 11,
                "total_hurt": 45270,
                "total_damage": 18552,
                "total_heal": 19590,
                "total_damage_tower": 839,
                "dead": false,
                "revive_left_time": 0,
                "major_left_time": 8,
                "skill_left_time": 83,
                "rune_id": 20003,
                "kill_num": 1,
                "dead_num": 0,
                "assist_num": 9,
                "rune_map": {
                    "1": 711,
                    "2": 321,
                    "3": 731
                },
                "equip_list": [
                    3521,
                    3205,
                    2201,
                    2205,
                    1202
                ],
                "map_pos": {
                    "x": -39.007812,
                    "y": 2.078125
                },
                "xpm": 876,
                "hit_rate": null,
                "gold_map": null
            }
        ],
        "ban_hero_list": [
            11,
            1,
            4,
            5,
            15
        ],
        "kill_lord_advantage": [
            {
                "begin_time": 582,
                "end_time": 655,
                "gold": 6566,
                "exp": 8717,
                "tower_hp": 34464
            }
        ],
        "enemy_area_get": [
            {
                "end_time": 120,
                "purple_buffer_num": 0,
                "orange_buffer_num": 0,
                "monster_gold": 95
            },
            {
                "end_time": 300,
                "purple_buffer_num": 0,
                "orange_buffer_num": 0,
                "monster_gold": 0
            },
            {
                "end_time": 480,
                "purple_buffer_num": 1,
                "orange_buffer_num": 1,
                "monster_gold": 522
            },
            {
                "end_time": 655,
                "purple_buffer_num": 1,
                "orange_buffer_num": 2,
                "monster_gold": 895
            }
        ],
        "kill_tortoise": 1
    },])
}

const displayComponents = (name) => {
    if (name === "video") {
      return <VideoComponent />;
    } else if (name === "picture") {
      return <PictureComponent />;
    }
  }; 

  return (

    <div className="h-screen bg-green-500">{displayComponents(type)}</div>



    // <div className=" static min-h-screen bg-lime-600 flex justify items-center">

    // <div className=" bg-black bg-opacity-70 p-4 absolute bottom-0 left-0 right-0">
    //   {/* Player Stats */}
    //   <div className="flex justify-between mb-4">
    //     <div className="text-white">
    //       <span className="block">Team Name</span>
    //       <span className="block text-gray-400">Level 5</span>
    //     </div>
    //     <div className="text-white">
    //       <span className="block">Gold: 1000</span>
    //       <span className="block">XP: 500</span>
    //     </div>
    //   </div>

    //     {/* Health and Mana Bars */}
    //     <div className="flex justify-between mb-4">
    //       <div className="w-1/2 mr-2">
    //         <div className="bg-red-500 rounded-lg">
    //           <div
    //             className="bg-green-500 rounded-lg h-4"
    //             style={{ width: "70%" }}
    //           ></div>
    //         </div>
    //         <span className="block text-white mt-2">HP: 70%</span>
    //       </div>
    //       <div className="w-1/2 ml-2">
    //         <div className="bg-blue-500 rounded-lg">
    //           <div
    //             className="bg-blue-300 rounded-lg h-4"
    //             style={{ width: "50%" }}
    //           ></div>
    //         </div>
    //         <span className="block text-white mt-2">MP: 50%</span>
    //       </div>
    //     </div>

    //   <div className=" flex flex-row">
    //   {/* Minimap */}
    //   {campList1[0]?.player_list.map((player)=>(
          
    //       <div className=" bg-gray-800 rounded-lg p-2">
    //     <div className="bg-gray-600 w-48 h-32 rounded-lg">
    //         {player.name}
    //       {/* Minimap content here */}
    //     </div>
    //   </div>
    //       ))}
    //       </div>

    //     {/* Action Buttons */}
    //     <div className="flex justify-center mt-4">
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mx-2">
    //         Attack
    //       </button>
    //       <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mx-2">
    //         Defend
    //       </button>
    //       <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg mx-2">
    //         Use Item
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // <div classNameName=" static min-h-screen bg-lime-600 flex justify items-center">
    //   <div classNameName=" absolute bottom-0 right-0 mr-10 ml-10  left-0 p-16 text-4xl font-bold text-slate-700 rounded-xl bg-white shadow-lg hover:shadow-xl  transition-all transform duration-300">

    //       <h1>Team Name</h1>
    //       {campList.map((camp,i)=> (

    //             camp.team_name

    //       ))}
    //   </div>
    // </div>
  );
};

export default SocketPage;
