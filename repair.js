var repair = {
    run: function(creep) {

        if (creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.memory.localBuild = false;
        }
        if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if (creep.memory.building && !creep.memory.localBuild) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (x) => x.hits < x.hitsMax &&
                    (x.hitsMax > 25000 || x.hits < 2000)
            });
            targets = targets.sort((x1, x2) => {
                return x1.hits - x2.hits
            });
            if (targets.length) {
                if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                } else {
                    creep.memory.localBuild = true;
                    creep.memory.localTarget = targets[0].id;
                }
            }
        } else if (creep.memory.building && creep.memory.localBuild){
            target = Game.getObjectById(creep.memory.localTarget);
            if (target.hits < target.hitsMax){
                if (creep.repair(target) < 0){
                    creep.moveTo(target);
                }
            } else {
                creep.memory.localBuild = false;
            }
        } else {
            var sources = creep.room.find(FIND_DROPPED_RESOURCES, {
                filter: (stuff) => stuff.amount >= creep.carryCapacity
            });
            if (sources.length > 0) {
                var target = creep.pos.findClosestByRange(sources);
                if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) =>
                        structure.structureType == STRUCTURE_CONTAINER &&
                        structure.store[RESOURCE_ENERGY] > creep.carryCapacity
                });
                if (sources.length > 0) {
                    sources = sources.sort((x1, x2) =>
                        x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
                } else {
                    sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (blerg) =>
                            blerg.structureType == STRUCTURE_STORAGE
                    });
                }
                if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            }
        }
    }
};

module.exports = repair;
