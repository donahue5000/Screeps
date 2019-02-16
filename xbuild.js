var xbuild = {
    run: function(creep) {
        if (creep.room != Game.flags[creep.memory.home].room) {
            creep.moveTo(Game.flags[creep.memory.home]);
        } else {
            if (creep.memory.building && creep.carry.energy == 0) {
                creep.memory.building = false;
            }
            if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
                creep.memory.building = true;
            }

            if (creep.memory.building) {
                var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if (targets.length > 0) {
                    target = creep.pos.findClosestByRange(targets);
                    if (creep.build(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                } else {
                    var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (x) => x.hits < x.hitsMax
                    });
                    targets = targets.sort((x2, x1) => {
                        return (x1.hitsMax / x1.hits) - (x2.hitsMax / x2.hits)
                    });
                    if (targets.length) {
                        if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(targets[0]);
                        }
                    }
                }
            } else {
                var sources = creep.room.find(FIND_DROPPED_RESOURCES);
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
                    sources = sources.sort((x1, x2) =>
                        x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
                    if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                }
            }
        }
    }
};

module.exports = xbuild;
