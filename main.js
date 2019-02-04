var build = require('build');
var upgrade = require('upgrade');
var mine = require('mine');
var repair = require('repair');
var haul = require('haul');

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
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine'){
            mineCount++;
            if (creep.memory.source = 0){
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
        }
    }
    
    if (mineCount < 2){
        Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, MOVE], 'mine ' + (Game.time - 3937500), {'role':'mine'});
    }else if (haulCount < 1){
        Game.spawns.Spawn1.createCreep([MOVE, CARRY, CARRY, CARRY], 'haul ' + (Game.time - 3937500), {'role':'haul'});
    }else if (upgradeCount < 1){
        Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], 'upgrade ' + (Game.time - 3937500), {'role':'upgrade'});
    }else if (buildCount < 3){
        Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, MOVE, CARRY, CARRY, CARRY, CARRY], 'build ' + (Game.time - 3937500), {'role':'build'});
    }else if (repairCount < 1){
        Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, MOVE, CARRY, CARRY], 'repair ' + (Game.time - 3937500), {'role':'repair'});
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
        }
    }
}