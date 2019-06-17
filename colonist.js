let colonist = {
    run: function(creep) {
        if (creep.room != Game.flags.colony.room) {
            creep.moveTo(Game.flags.colony, {reusePath:15});
            
            
            // if (!creep.memory.colonyMidpoint){
            //     creep.moveTo(Game.flags.colonyMidpoint);
            //     if (creep.pos == Game.flags.colonyMidpoint){
            //         creep.memory.colonyMidpoint = true;
            //     }
            // }
              
        } else {
            if (creep.carry.energy == 0) {
                creep.memory.mining = true;
            }
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.mining = false;
            }
            if (creep.memory.mining) {
                let source = creep.pos.findClosestByPath(FIND_SOURCES
                
                , {filter: (hasEnergy) => hasEnergy.energy > 0}
                
                );
                if (creep.harvest(source) < 0) {
                    creep.moveTo(source, {maxRooms:1}, {reusePath:15});
                }
            } else {
                let targets = creep.room.find(FIND_CONSTRUCTION_SITES, {
                    filter: (x) => x.my
                });
                if (targets.length > 0) {
                    let target = creep.pos.findClosestByRange(targets);
                    if (creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                    }
                } else {
                    let targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN ||
                                    structure.structureType == STRUCTURE_TOWER) &&
                                structure.energy < structure.energyCapacity;
                        }
                    });
                    let target = creep.pos.findClosestByRange(targets);
                    if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                    } else {
                        target = creep.room.controller;
                        if (creep.upgradeController(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                        }
                    }
                }
            }
        }
    }
};
module.exports = colonist;
