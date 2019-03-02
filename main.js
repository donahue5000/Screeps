//energy gather- creep capacity, priority
//creep destination coordination
//killers atack under flag first
//auto safe mode
//links
//optimize
//scout signer
//fill turret first
//better pathfinding
//turret filter non damage dealers
//not all turrets fire
//minerals
//labs
//market
//recall outsiders
//war mode



var build = require('build');
var upgrade = require('upgrade');
var mine = require('mine');
var repair = require('repair');
var haul = require('haul');
var xmine = require('xmine');
var xhaul = require('xhaul');
var reserver = require('reserver');
var xbuild = require('xbuild');
var killer = require('killer');
var breacher = require('breacher');
var claim = require('claim');
var colonist = require('colonist');
var Spawn1 = require('Spawn1');
var Spawn2 = require('Spawn2');
var Spawn3 = require('Spawn3');
var Spawn4 = require('Spawn4');

module.exports.loop = function() {
    
    
    // for (var i in Game.creeps){
    //     var x = Game.creeps[i];
    //     if (x.memory.role == 'breacher'){
    //         x.memory.role = 'killer';
    //     }
    // }
    
    // for (var i in Game.creeps){
    //     var x = Game.creeps[i];
    //     if (x.memory.role == 'breacher'){
    //         x.memory.midwaybreach2 = true;
    //     }
    // }
    
    
    console.log(Game.cpu.bucket);
    

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }



    Spawn1.run('Spawn1');
    Spawn2.run('Spawn2');
    Spawn3.run('Spawn3');
    Spawn4.run('Spawn4');

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine') {
            mine.run(creep);
        } else if (creep.memory.role == 'killer') {
            killer.run(creep);
        } else if (creep.memory.role == 'breacher') {
            breacher.run(creep);
        } else if (creep.memory.role == 'upgrade') {
            upgrade.run(creep);
        } else if (creep.memory.role == 'build') {
            build.run(creep);
        } else if (creep.memory.role == 'repair') {
            repair.run(creep);
        } else if (creep.memory.role == 'haul') {
            haul.run(creep);
        } else if (creep.memory.role == 'xmine') {
            xmine.run(creep);
        } else if (creep.memory.role == 'xhaul') {
            xhaul.run(creep);
        } else if (creep.memory.role == 'reserver') {
            reserver.run(creep);
        } else if (creep.memory.role == 'xbuild') {
            xbuild.run(creep);
        } else if (creep.memory.role == 'claim') {
            claim.run(creep);
        } else if (creep.memory.role == 'colonist') {
            colonist.run(creep);
        }
    }
}
