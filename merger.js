const fs = require('fs');
const a1 = require('./data/accesories.json');
const a2 = require('./data/alchemystone.json');
const a3 = require('./data/armor.json');
const a4 = require('./data/awaken.json');
const a5 = require('./data/consumables.json');
const a6 = require('./data/dye.json');
const a7 = require('./data/enhancement.json');
const a8 = require('./data/furniture.json');
const a9 = require('./data/lifetools.json');
const a10 = require('./data/magiccrystal.json');
const a11 = require('./data/mainhand.json');
const a12 = require('./data/materials.json');
const a13 = require('./data/mount.json');
const a15 = require('./data/ship.json');
const a16 = require('./data/subweapon.json');
const a17 = require('./data/wagon.json');

const merge = a1.concat(a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a15,a16,a17);
fs.writeFileSync('./data/complete.json',JSON.stringify(merge,null,2));