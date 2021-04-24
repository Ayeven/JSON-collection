const axios = require ('axios'); 
const lang = 'us'; 
const recipeID = require('./bdocodex/complete_ids.json'); 
const cheerio = require ('cheerio'); 
const fs = require ('fs');
 
const scrap = async () => {
  const array = [];
  for await (const id of recipeID) {
    const a = await axios(`https://bdocodex.com/tip.php?id=recipe--${id}&l=${lang}`);
    let result;
    const html = a.data;
    const $ = cheerio.load(html); 
    const name = $('#item_name').text();
    const lvl = $('td>span').eq(3).text();
    const category = $('.yellow_text').eq(0).text();
    const q1 = parseInt($('a.qtooltip').eq(0).text().trim().padStart(1,1) );
    const m1 = $('a.qtooltip').eq(1).text().trim().padStart(1,1);
    const q2 = parseInt($('a.qtooltip').eq(2).text().trim().padStart(1,1) );
    const m2 = $('a.qtooltip').eq(3).text().trim().padStart(1,1);
    const q3 = parseInt($('a.qtooltip').eq(4).text().trim().padStart(1,1) );
    const m3 = $('a.qtooltip').eq(5).text().trim().padStart(1,1);
    const q4 = parseInt($('a.qtooltip').eq(6).text().trim().padStart(1,1) );
    const m4 = $('a.qtooltip').eq(7).text().trim().padStart(1,1);
    const q5 = parseInt($('a.qtooltip').eq(8).text().trim().padStart(1,1) );
    const m5 = $('a.qtooltip').eq(9).text().trim().padStart(1,1);
    const qd = 2.5;
    if ((m4==name ) ) {result = ({id, name, lvl, category, mats1:[m1,q1,parseFloat((0.1*q1).toFixed(2) )],mats2:[m2,q2,parseFloat((0.1*q2).toFixed(2))],mats3:[m3,q3,parseFloat((0.1*q3).toFixed(2) )],qd});} 
    else if ((m5==name ) ) {result = ({id, name, lvl, category, mats1:[m1,q1,parseFloat((0.1*q1).toFixed(2) )],mats2:[m2,q2,parseFloat((0.1*q2).toFixed(2))],mats3:[m3,q3,parseFloat((0.1*q3).toFixed(2) )],mats4:[m4,q4,parseFloat((0.1*q4).toFixed(2) )],qd});}
    else {result = ({id, name, lvl, category, mats1:[m1,q1,parseFloat((0.1*q1).toFixed(2) )],mats2:[m2,q2,parseFloat((0.1*q2).toFixed(2))],mats3:[m3,q3,parseFloat((0.1*q3).toFixed(2) )],mats4:[m4,q4,parseFloat((0.1*q4).toFixed(2) )],mats5:[m5,q5,parseFloat((0.1*q5).toFixed(2) )],qd});}
    array.push(result);
    console.log(result); 
  }
  fs.writeFileSync('./bdocodex/complete_recipes.json',JSON.stringify(array,null,2));
};
 
scrap();