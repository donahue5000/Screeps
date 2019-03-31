var xhaul = {
    run: function(creep) {

        if (creep.carry.energy == creep.carryCapacity) {
            creep.memory.hauling = true;
        } else if (creep.carry.energy == 0) {
            creep.memory.hauling = false;
        }

        if (creep.memory.hauling == false) {
            if (creep.room != Game.flags[creep.memory.home].room) {
                creep.moveTo(Game.flags[creep.memory.home], {reusePath:50});
            } else {
                var sources = creep.room.find(FIND_DROPPED_RESOURCES, {
                    filter: (stuff) => stuff.amount > 0
                });
                if (sources.length > 0) {
                    var target = sources[0];
                    if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                } else {
                    sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>
                            structure.structureType == STRUCTURE_CONTAINER
                    });
                    sources = sources.sort((x1, x2) => x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
                    if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0], {reusePath:15});
                    }
                }
            }
        } else {
            if (creep.room != Game.spawns[creep.memory.home].room) {
                creep.moveTo(Game.spawns[creep.memory.home], {reusePath:50});
            } else {
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
                });

                if (targets.length < 1) {
                    targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_TOWER) &&
                                structure.energy < structure.energyCapacity;
                        }
                    });
                }
                if (targets.length < 1) {
                    targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => structure.structureType == STRUCTURE_STORAGE
                    });
                }

                if (targets.length > 0) {
                    var target = creep.pos.findClosestByRange(targets);
                    if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {reusePath:15});
                    }
                }
            }
        }
    }
};

module.exports = xhaul;
