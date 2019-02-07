var xbuild = {
    run: function(creep) {
      if (creep.room != Game.flags.minex.room){
          creep.moveTo(Game.flags.minex);
      }else{
            if(creep.memory.building && creep.carry.energy == 0) {
                creep.memory.building = false;
            }
            if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
                creep.memory.building = true;
            }
    
            if(creep.memory.building) {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length > 0) {
                    target = creep.pos.findClosestByRange(targets);
                    if(creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }else{
                    var targets = creep.room.find(FIND_STRUCTURES, {filter: (x) => x.hits < x.hitsMax 
                        && x.hits < 250000});
                    targets = targets.sort((x1, x2) => {return x1.hits - x2.hits});
                    targets = targets.sort((x1, x2) => {return x2.hitsMax - x1.hitsMax});
                    if(targets.length) {
                        if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                        }
                    }
                }
            }
            else {
                sources = creep.room.find(FIND_STRUCTURES, {filter: (structure) => 
                structure.structureType == STRUCTURE_CONTAINER});
                sources = sources.sort((x1, x2) => x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
                if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(sources[0]);
                }
            }
      }
    }
};

module.exports = xbuild;