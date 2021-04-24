const fs = require('fs');
const a1 = require('./bdocodex/alch_recipes.json');
const a2 = require('./bdocodex/cook_recipes.json')
const merge = a1.concat(a2);
fs.writeFileSync('./bdocodex/complete_ids.json',JSON.stringify(merge));