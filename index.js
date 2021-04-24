const axios = require ('axios');
const fs = require ('fs');
const base = "https://trade.sea.playblackdesert.com/Trademarket/GetWorldMarketList";
const inst = axios.create({withCredentials:true})
const instance = async () => {
/*
category list:
1 - Main Weapon
5 - Sub Weapon
10 - Awakening Weapon
15 - Armor
20 - Accesories
25 - Materials
30 - Enhancement/Upgrade
35 - Consumables
40 - Life Tools
45 - Alchemy Stone
50 - Magic Crystal
55 - Pearl Items
60 - Dye
65 - Mount
70 - Ship
75 - Wagon
80 - Furniture
*/
const getPrice = await inst(base,{
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "BlackDesert"
  },
  data: {
    keyType: 0,
    mainCategory: 10
  },
  method: "POST"
})

const result = (()=>{
  const r = [];
  const data = getPrice.data.resultMsg;
  const sp = data.split("|");
  sp.pop();
  sp.forEach( (e)=>{
    const res = e.split('-');
    const id = res[0];
    r.push(id); 
  })
  return r;
})();
fs.writeFileSync('./data/awaken.json',JSON.stringify(result,null,2));
}

instance();
