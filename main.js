


var mineralBot = require('mineralBot');
var mineralManager = require('mineralManager');

var build = require('build');
var upgrade = require('upgrade');
var mine = require('mine');
var repair = require('repair');
var haul = require('haul');

var towerController = require('towerController');
var linkController = require('linkController');
var labController = require('labController');
var panicButton = require('panicButton');

var Spawn1 = require('Spawn1');
var Spawn2 = require('Spawn2');
var Spawn3 = require('Spawn3');
var Spawn4 = require('Spawn4');
var Spawn5 = require('Spawn5');
var Spawn6 = require('Spawn6');
var Spawn7 = require('Spawn7');
var Spawn8 = require('Spawn8');
var Spawn9 = require('Spawn9');

// var colonist = require('colonist');
// var claim = require('claim');

var killer = require('killer');
var killerHealer = require('killerHealer');

module.exports.loop = function() {
    

    
    
    
    if (Game.time % 5 == 0){
        var roomList = [
            'E29S49',   //1 L  zk ul --- g
            'E31S41',   //2 O  o h --- oh
            'E41S39',   //3 H
            'E39S49',   //4 U
            'E41S29',   //5 Z
            'E21S49',   //6 K
            'W19S17',   //7 Z
            'W19S39',   //8 H
            'W21S25'    //9 L
        ];
        for (var x = 0; x < roomList.length; x++){
            var thisRoom = Game.rooms[roomList[x]];
            try{
                panicButton.run(thisRoom);
            }catch(e){
                console.log(e);
            }
            
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
            
            try{
                labController.run(thisRoom);
            }catch(e){
                console.log(e);
            }
        }
    }
    
    


    if (Game.time % 10 == 0){
        
        console.log(Game.cpu.bucket);
        
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
        
        
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
        
        try{
            Spawn9.run('9');
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
            
        } else if (creep.memory.role == 'killerHealer') {
            try{
                killerHealer.run(creep);
            }catch(e){
                console.log(e.message);
            }
            
            
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
        }
    }
}


//fuel nukes
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
//upgraders simultaneous actions
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
//load level roles
//market energy balance
//fleet build counter
//colonists upgrade to 2 before building spawn
//simultaneous actions
//build priority
//functions - return nearest energy etc
