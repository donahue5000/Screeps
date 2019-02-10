var colonist = {

    run: function(creep) {
            if (creep.room != Game.flags.colony.room){
                if (creep.pos.isEqualTo(Game.flags.midway.pos)){
                    creep.memory.halfway = true;
                }
                if (!creep.memory.halfway){
                    creep.moveTo(Game.flags.midway);
                }else{
                    creep.moveTo(Game.flags.colony);
                }
                
            }else{
                if (creep.carry.energy == 0){
                    creep.memory.mining = true;
                }
                if (creep.carry.energy == creep.carryCapacity){
                    creep.memory.mining = false;
                } 
                
                if (creep.memory.mining){
                    var sources = creep.room.find(FIND_SOURCES);
                    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                }else{
                    var targets = creep.room.find(FIND_CONSTRUCTION_SITES, {filter: 
                        (x) => x.my
                    });
                    if(targets.length > 0) {
                        var target = creep.pos.findClosestByRange(targets);
                        if(creep.build(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                        }
                    }else{
                        var targets = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                            }
                        });
                        var target = creep.pos.findClosestByRange(targets);
                            if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                                creep.moveTo(target);
                            }
                            else{
                                target = creep.room.controller;
                                if (creep.upgradeController(target) == ERR_NOT_IN_RANGE){
                                    creep.moveTo(target);
                            }
                        }
                    }
                }
        }
    }
};

module.exports = colonist;