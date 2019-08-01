let build = {
    run: function(creep) {

        if (creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length > 0) {
                target = creep.pos.findClosestByRange(targets);
                if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                }
            } else {
                let targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (x) => x.hits < x.hitsMax
                });
                targets = targets.sort((x1, x2) => {
                    return x1.hits - x2.hits
                });
                if (targets.length) {
                    target = targets[0];
                    if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                    }
                }
            }
        } else {
            let sources = creep.room.find(FIND_DROPPED_RESOURCES, {
                filter: (stuff) => stuff.amount >= creep.carryCapacity &&
                            stuff.resourceType == RESOURCE_ENERGY
            });
            if (sources.length > 0) {
                let target = creep.pos.findClosestByRange(sources);
                if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                }
            } else {
                sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) =>
                        (structure.structureType == STRUCTURE_CONTAINER ||
                        structure.structureType == STRUCTURE_STORAGE) &&
                        structure.store[RESOURCE_ENERGY] >= creep.carryCapacity
                });
                if (sources.length > 0) {
                    target = creep.pos.findClosestByRange(sources);
                }
                if (creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                }
            }
        }
    }
};

module.exports = build;
