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

module.exports.loop = function () {
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    
    
    
    var towers = Game.spawns.Spawn1.room.find(FIND_STRUCTURES, {filter: (structure) => structure.structureType == STRUCTURE_TOWER});
    for (var tower in towers){
        tower = towers[tower];
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }
    
    
    var source0 = 0;
    var source1 = 0;
    
    var mineCount = 0;
    var upgradeCount = 0;
    var buildCount = 0;
    var repairCount = 0;
    var haulCount = 0;
    var xhaulCount = 0;
    var xmineCount = 0;
    var reserverCount = 0;
    var xbuildCount = 0;
    var killerCount = 0;
    
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine'){
            mineCount++;
            if (creep.memory.source == 0){
                source0++;
            }else if (creep.memory.source == 1){
                source1++;
            }
        }else if (creep.memory.role == 'upgrade'){
            upgradeCount++;
        }else if (creep.memory.role == 'build'){
            buildCount++;
        }else if (creep.memory.role == 'repair'){
            repairCount++;
        }else if (creep.memory.role == 'haul'){
            haulCount++;
        }else if (creep.memory.role == 'xmine'){
            xmineCount++;
        }else if (creep.memory.role == 'xhaul'){
            xhaulCount++;
        }else if (creep.memory.role == 'reserver'){
            reserverCount++;
        }else if (creep.memory.role == 'xbuild'){
            xbuildCount++;
        }else if (creep.memory.role == 'killer'){
            killerCount++;
        }
    }
    
    Game.spawns.Spawn1.memory.source0 = source0;
    Game.spawns.Spawn1.memory.source1 = source1;
    
    var nextSource = 0;
    if (source0 > 0){
        nextSource = 1;
    }
    
    
    if (mineCount < 2){
        Game.spawns.Spawn1.createCreep([
            WORK, WORK, WORK, WORK, WORK,
            MOVE
            ], 'm' + (Game.time), {'role':'mine', 'source':nextSource});
    }else if (haulCount < 1){
        Game.spawns.Spawn1.createCreep([
            MOVE, MOVE, 
            CARRY, CARRY, CARRY
            ], 'h' + (Game.time), {'role':'haul'});
    }else if (upgradeCount < 3){
        Game.spawns.Spawn1.createCreep([
            WORK, WORK, WORK, WORK, WORK,
            MOVE, 
            CARRY, CARRY, CARRY
            ], 'u' + (Game.time), {'role':'upgrade'});
    }else if (buildCount < 1){
        Game.spawns.Spawn1.createCreep([
            WORK,
            MOVE,
            CARRY
            ], 'b' + (Game.time), {'role':'build'});
    }else if (repairCount < 1){
        Game.spawns.Spawn1.createCreep([
            WORK,
            MOVE,
            CARRY
            ], 'r' + (Game.time), {'role':'repair'});
    }else if (xmineCount < 1){
        Game.spawns.Spawn1.createCreep([
            WORK, WORK, WORK, WORK, WORK,
            MOVE, MOVE, MOVE
            ], 'xm' + (Game.time), {'role':'xmine'});
    }else if (xhaulCount < 1){
        Game.spawns.Spawn1.createCreep([
            MOVE, MOVE, MOVE, MOVE, MOVE,
            CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
            ], 'xh' + (Game.time), {'role':'xhaul'});
    }else if (reserverCount < 1){
        Game.spawns.Spawn1.createCreep([
            MOVE,
            CLAIM, CLAIM
            ], 'res' + (Game.time), {'role':'reserver'});
    }else if (xbuildCount < 2){
        Game.spawns.Spawn1.createCreep([
            MOVE, MOVE, MOVE,
            CARRY, CARRY, CARRY,
            WORK, WORK, WORK
            ], 'xb' + (Game.time), {'role':'xbuild'});
    }else if (killerCount < 0){
        Game.spawns.Spawn1.createCreep([
            TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
            MOVE, MOVE, MOVE, MOVE, MOVE,
            ATTACK, ATTACK, ATTACK, ATTACK, ATTACK
            ], 'killer' + (Game.time), {'role':'killer'});
    }
    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'mine') {
            mine.run(creep);
        }else if(creep.memory.role == 'upgrade') {
            upgrade.run(creep);
        }else if(creep.memory.role == 'build') {
            build.run(creep);
        }else if(creep.memory.role == 'repair'){
            repair.run(creep);
        } else if(creep.memory.role == 'haul'){
            haul.run(creep);
        }else if(creep.memory.role == 'xmine'){
            xmine.run(creep);
        }else if(creep.memory.role == 'xhaul'){
            xhaul.run(creep);
        }else if(creep.memory.role == 'reserver'){
            reserver.run(creep);
        }else if(creep.memory.role == 'xbuild'){
            xbuild.run(creep);
        }else if(creep.memory.role == 'killer'){
            killer.run(creep);
        }
    }
}