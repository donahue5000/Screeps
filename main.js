//links
//minerals
//labs
//market
//energy based spawn loop
//creep destination coordination
//killers atack under flag first
//auto safe mode
//fill turret priority
//turrets sort lowest hp or healers
//better pathfinding
//turret filter non damage dealers
//recall outsiders
//war mode
//remote harvesting
//path flag chains
//guard flags
//replace const sites
//try catch local
//load level roles
//auto defenders
//market energy balance
//fleet build counter
//colonists upgrade to 2 before building spawn
//simultaneous actions



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
var tank = require('tank');
var Spawn1 = require('Spawn1');
var Spawn2 = require('Spawn2');
var Spawn3 = require('Spawn3');
var Spawn4 = require('Spawn4');
var Spawn5 = require('Spawn5');
var Spawn6 = require('Spawn6');

module.exports.loop = function() {
    
    
    // for (var i in Game.creeps){
    //     var x = Game.creeps[i];
    //     if (x.memory.role == 'build'){
    //         x.memory.role = 'repair';
    //     }
    // }
    
    // for (var i in Game.creeps){
    //     var x = Game.creeps[i];
    //     if (x.memory.role == 'breacher'){
    //         x.memory.midwaybreach2 = true;
    //     }
    // }
    
    // for (var i in Game.creeps.colonist4780463.room.find(FIND_STRUCTURES)){
    //     i.destroy;
    // }
    
    
    console.log(Game.cpu.bucket);
    

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
        }
    }


    try{
        Spawn1.run('Spawn1');
    }catch(e){}
    
    try{
        Spawn2.run('Spawn2');
    }catch(e){}
    
    try{
        Spawn3.run('Spawn3');
    }catch(e){}
    
    try{
        Spawn4.run('Spawn4');
    }catch(e){}
    
    try{
        Spawn5.run('Spawn5a');
    }catch(e){}
    
    try{
        Spawn6.run('Spawn6');
    }catch(e){}
    

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine') {
            try{
            mine.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'killer') {
            try{
            killer.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'breacher') {
            try{
            breacher.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'upgrade') {
            try{
            upgrade.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'build') {
            try{
            build.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'repair') {
            try{
            repair.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'haul') {
            try{
            haul.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'xmine') {
            try{
            xmine.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'xhaul') {
            try{
            xhaul.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'reserver') {
            try{
            reserver.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'xbuild') {
            try{
            xbuild.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'claim') {
            try{
            claim.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'colonist') {
            try{
            colonist.run(creep);
            }catch(e){}
        } else if (creep.memory.role == 'tank') {
            try{
            tank.run(creep);
            }catch(e){}
        }
    }
}
