//automate power harvesting
//upgraders simultaneous actions
//creep counting from spawn name memory to room memory
//labs
//mineral balancing
//market
//creep body builder
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
//build priority
//functions - return nearest energy etc


var mineralBot = require('mineralBot');
var build = require('build');
var upgrade = require('upgrade');
var mine = require('mine');
var repair = require('repair');
var haul = require('haul');
var towerController = require('towerController');
var linkController = require('linkController');
var powerHarvester = require('powerHarvester');
var powerGrabber = require('powerGrabber');
var powerHealer = require('powerHealer');

var Spawn1 = require('Spawn1');
var Spawn2 = require('Spawn2');
var Spawn3 = require('Spawn3');
var Spawn4 = require('Spawn4');
var Spawn5 = require('Spawn5');
var Spawn6 = require('Spawn6');
var Spawn7 = require('Spawn7');
var Spawn8 = require('Spawn8');

// var colonist = require('colonist');
// var claim = require('claim');

// var reserver = require('reserver');
// var xmine = require('xmine');
// var xhaul = require('xhaul');
// var xguard = require('xguard');

// var xbuild = require('xbuild');
// var tank = require('tank');
var killer = require('killer');
// var breacher = require('breacher');

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
    
    Memory.tick5++;
    if (Memory.tick5 >= 5){
        Memory.tick5 = 0;
        
        console.log(Game.cpu.bucket);
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
    }
    
    
    
    
    if (Game.spawns['1'].room.storage.store[RESOURCE_ENERGY] > 500000){
        var zapJuice = Game.spawns['1'].room.find(FIND_STRUCTURES, {
                filter: structure => structure.structureType == STRUCTURE_POWER_SPAWN
                });
        if (zapJuice[0].power > 0 && zapJuice[0].energy >= 50){
            zapJuice[0].processPower();
        }
        
        if (zapJuice[0].power <= 50 && Game.spawns['1'].room.storage.store[RESOURCE_POWER] > 0){
            Game.spawns['1'].room.memory.processing = true;
        }else{
            Game.spawns['1'].room.memory.processing = false;
        }
    } else {
        Game.spawns['1'].room.memory.processing = false;
    }
    
    
    
    
    
    
    
    
    
    for (spawn in Game.spawns){
        var thisRoom = Game.spawns[spawn].room;
        
        try{
            towerController.run(thisRoom);
        }catch(e){
            console.log(e.message);
        }
        
        try{
            linkController.run(thisRoom);
        }catch(e){
            console.log(e);
        }
    }
    
    



    if (Memory.tick5 == 2){
        try{
            Spawn1.run('1');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn2.run('2');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn3.run('3');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn4.run('4');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn5.run('5');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn6.run('6');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn7.run('7');
        }catch(e){
            console.log(e.message);
        }
        
        try{
            Spawn8.run('8');
        }catch(e){
            console.log(e.message);
        }
    }
    

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine') {
                mine.run(creep);
                
        } else if (creep.memory.role == 'killer') {
            try{
                killer.run(creep);
            }catch(e){
                console.log(e.message);
            }
        // } else if (creep.memory.role == 'breacher') {
        //     try{
        //         breacher.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'tank') {
        //     try{
        //         tank.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'xbuild') {
        //     try{
        //         xbuild.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        
        
        
        
        // } else if (creep.memory.role == 'xmine') {
        //     try{
        //         xmine.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'xhaul') {
        //     try{
        //         xhaul.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'xguard') {
        //     try{
        //         xguard.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'reserver') {
        //     try{
        //         reserver.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
            
            
            
        // } else if (creep.memory.role == 'colonist') {
        //     try{
        //         colonist.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'claim') {
        //     try{
        //         claim.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
            
        } else if (creep.memory.role == 'mineralBot') {
            try{
                mineralBot.run(creep);
            }catch(e){
                console.log(e.message);
            }
            
            
        } else if (creep.memory.role == 'upgrade') {
            try{
                upgrade.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'build') {
            try{
                build.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'repair') {
            try{
                repair.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'haul') {
            try{
                haul.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'powerHarvester') {
            try{
                powerHarvester.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'powerGrabber') {
            try{
                powerGrabber.run(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'powerHealer') {
            try{
                powerHealer.run(creep);
            }catch(e){
                console.log(e.message);
            }
        }
    }
}
