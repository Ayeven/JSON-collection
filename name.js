const axios = require ('axios');
const merge = require ('./data/wagon.json');
const cheerio = require ('cheerio');
const fs = require ('fs');

const getname = async () => {
  const result =[];
  for (const r of merge) {
    const go = await axios(`https://bdocodex.com/tip.php?id=item--${r}&enchant=0&l=us`);
    const $ = cheerio.load(go.data);
    const name = $('#item_name').eq(0).text().trim();
    result.push([r,name]);
    console.log(`fetch ${name} for ${r}`);
  }
  fs.writeFileSync('./data/wagon_pair.json',JSON.stringify(result,null,2));  
};

getname();