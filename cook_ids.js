const axios = require ('axios');
const lang = 'us'; 
const cheerio = require ('cheerio'); 
const fs = require ('fs');
 
const scrap = async () => { 
  const array = [];
    const a = await axios(`https://bdocodex.com/query.php?a=recipes&type=culinary&id=1&l=${lang}`);
    const ids = a.data.aaData;
    for (let i= 0;i<ids.length;i++) {
        const id = ids[i][0];
        array.push(id);
        console.log(id);
    }
  fs.writeFileSync('./bdocodex/cook_recipes.json',JSON.stringify(array));
}
scrap()