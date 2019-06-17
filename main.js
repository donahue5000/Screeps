


let mineralBot = require('mineralBot');
let mineralManager = require('mineralManager');

let build = require('build');
let upgrade = require('upgrade');
let mine = require('mine');
let repair = require('repair');
let haul = require('haul');

let linkController = require('linkController');
let panicButton = require('panicButton');

let Spawn1 = require('Spawn1');
let Spawn2 = require('Spawn2');
let Spawn3 = require('Spawn3');
let Spawn4 = require('Spawn4');
let Spawn5 = require('Spawn5');
let Spawn6 = require('Spawn6');
let Spawn7 = require('Spawn7');
let Spawn8 = require('Spawn8');
let Spawn9 = require('Spawn9');
let Spawn10 = require('Spawn10');
let Spawn11 = require('Spawn11');

// let colonist = require('colonist');
// let claim = require('claim');

// let killer = require('killer');
// let killerHealer = require('killerHealer');
// let voyager = require('voyager');

module.exports.loop = function() {
    
    
    
    
    // if (Game.spawns['1'].room.storage.store[RESOURCE_ENERGY] > 10000){
    //     let zapJuice = Game.spawns['1'].room.find(FIND_STRUCTURES, {
    //             filter: structure => structure.structureType == STRUCTURE_POWER_SPAWN
    //             });
    //     if (zapJuice[0].power > 0 && zapJuice[0].energy >= 50){
    //         zapJuice[0].processPower();
    //     }
        
    //     if (zapJuice[0].power == 0 && Game.spawns['1'].room.storage.store[RESOURCE_POWER] > 0){
    //         Game.spawns['1'].room.memory.processing = true;
    //     }else{
    //         Game.spawns['1'].room.memory.processing = false;
    //     }
    // } else {
    //     Game.spawns['1'].room.memory.processing = false;
    // }
    
    
    
    for (let name in Game.creeps) {
        let creep = Game.creeps[name];
        
        // if (creep.memory.role == undefined){
        //     creep.memory.role = 'voyager';
        //     creep.memory.arrived = true;
        //     creep.memory.intercept = true;
        // }
        
        if (creep.memory.role == 'mine') {
                mine.run(creep);
                
                
                
        // } else if (creep.memory.role == 'killer') {
        //     try{
        //         killer.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        // } else if (creep.memory.role == 'killerHealer') {
        //     try{
        //         killerHealer.run(creep);
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
        } else if (creep.memory.role == 'mineralManager') {
            try{
                mineralManager.run(creep);
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
                repair.fixStuff(creep);
            }catch(e){
                console.log(e.message);
            }
        } else if (creep.memory.role == 'haul') {
            try{
                haul.run(creep);
            }catch(e){
                console.log(e.message);
            }
        // } else if (creep.memory.role == 'voyager') {
        //     try{
        //         voyager.run(creep);
        //     }catch(e){
        //         console.log(e.message);
        //     }
        }
    }
    
    let timer = 5;
    if (Memory.activeDefenseMode > 0){
        timer = 1;
    }
    
    
    if (Game.time % timer == 0){
        Memory.activeDefenseMode = 0;
        let roomList = [
            'E29S49',   //1  L  zk ul --- g - gh
            'E31S41',   //2  O  o h --- oh
            'E41S39',   //3  H
            'E39S49',   //4  U
            'E41S29',   //5  Z
            'E21S49',   //6  K
            'W19S17',   //7  Z
            'W19S39',   //8  H
            'W21S25',   //9  L
            'W19S27',   //10 X
            'E49S29',   //11 K
        ];
        for (let x = 0; x < roomList.length; x++){
            let thisRoom = Game.rooms[roomList[x]];
            
            try{
                panicButton.run(thisRoom);
            }catch(e){
                console.log(e);
            }
            
            try{
                linkController.run(thisRoom);
            }catch(e){
                console.log(e);
            }
        }
        //console.log(ActiveDefense: ' + Memory.activeDefenseMode + ' towerTimer: ' + timer);
    }
    
    


    if (Game.time % 20 == 0){
        
        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
        
        
        try{
            if (Game.spawns['1'].spawning == null){
                Spawn1.run('1');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['2'].spawning == null){
                Spawn2.run('2');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['3'].spawning == null){
                Spawn3.run('3');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['4'].spawning == null){
                Spawn4.run('4');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{if (Game.spawns['5'].spawning == null){
                Spawn5.run('5');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['6'].spawning == null){
                Spawn6.run('6');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['7'].spawning == null){
                Spawn7.run('7');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['8'].spawning == null){
                Spawn8.run('8');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['9'].spawning == null){
                Spawn9.run('9');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['10'].spawning == null){
                Spawn10.run('10');
            }
        }catch(e){
            console.log(e.message);
        }
        
        try{
            if (Game.spawns['Spawn11'].spawning == null){
                Spawn11.run('Spawn11');
            }
        }catch(e){
            console.log(e.message);
        }
        
        console.log('Bucket: ' + Game.cpu.bucket);
        
    // Memory.cpuCounter += 10;
    // console.log('Average CPU used: ' + (Memory.cpuTotal / Memory.cpuCounter) + ' over the last ' + Memory.cpuCounter + ' ticks.  ' +
    //     'Bucket: ' + Game.cpu.bucket);
        
    }
    
    // if (Game.time % 100 == 0){
    //     Memory.cpuCounter = 0;
    //     Memory.cpuTotal = 0;
    //     console.log('Clearing CPU average');
    // }
    
    // Memory.cpuTotal += Game.cpu.getUsed();
    
}

//remove decisions from creeps
    //transmit simple actions to creeps
//better assault group
    //kiting ranger
//upgraders simultaneous actions
//combine build/repair
//load level roles
//functions - return nearest energy etc
//build priority
//multi shard refactor
//better road repair
//find stuff intermittently
//notifications
//auto defenders/repairers
//generate more safe modes with 1000 g
//repo refactor
//save cpu time
//labs
//boosts
//upgrade from link
//colonist repair and deconstruct
//use findNearest maybe
//automate power harvesting
//creep counting from spawn name memory to room memory
    //use free spawns
//mineral balancing
//auto market
//creep body builder
//creep destination coordination
//turrets sort lowest hp or healers
//better pathfinding
//recall outsiders
//war mode
//remote harvesting
//path flag chains
//multiple guard flags
//replace const sites
//try catch local
//market energy balance
//fleet build counter
//colonists upgrade to 2 before building spawn
//simultaneous actions
