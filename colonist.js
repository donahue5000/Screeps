var colonist = {
    run: function(creep) {
        if (creep.room != Game.flags.colony.room) {
            creep.moveTo(Game.flags.colony, {reusePath:15});
              
        } else {
            if (creep.carry.energy == 0) {
                creep.memory.mining = true;
            }
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.mining = false;
            }
            if (creep.memory.mining) {
                var source = creep.pos.findClosestByPath(FIND_SOURCES);
                if (creep.harvest(source) < 0) {
                    creep.moveTo(source);
                }
            } else {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES, {
                    filter: (x) => x.my
                });
                if (targets.length > 0) {
                    var target = creep.pos.findClosestByRange(targets);
                    if (creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                } else {
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION ||
                                    structure.structureType == STRUCTURE_SPAWN) &&
                                structure.energy < structure.energyCapacity;
                        }
                    });
                    var target = creep.pos.findClosestByRange(targets);
                    if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    } else {
                        target = creep.room.controller;
                        if (creep.upgradeController(target) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target);
                        }
                    }
                }
            }
        }
    }
};
module.exports = colonist;
