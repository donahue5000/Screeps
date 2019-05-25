var haul = {

    run: function(creep) {
        if (creep.memory.hauling == true && creep.carry.energy < 1) {
            creep.memory.hauling = false;
        }

        if (creep.memory.hauling == false && creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) =>
                        (structure.structureType == STRUCTURE_LINK) &&
                        (structure.energy > 0) &&
                        structure.id == creep.room.memory.storeLink
                });
            if (sources.length < 1) {
                sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                    (structure.structureType == STRUCTURE_CONTAINER) &&
                    (structure.store[RESOURCE_ENERGY] >= creep.carryCapacity ||
                    structure.store[RESOURCE_ENERGY] >= creep.carryCapacity)
                });
            }
            if (sources.length < 1) {
                sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                    (structure.structureType == STRUCTURE_STORAGE) &&
                    (structure.store[RESOURCE_ENERGY] >= creep.carryCapacity ||
                    structure.store[RESOURCE_ENERGY] > 500)
                });
            }
            if (sources.length < 1) {
                sources = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                    (structure.structureType == STRUCTURE_TERMINAL) &&
                    (structure.store[RESOURCE_ENERGY] >= creep.carryCapacity)
                });
            }
            if (sources.length > 0){
                var thing = creep.pos.findClosestByRange(sources);
                if (creep.withdraw(thing, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(thing, {maxRooms:1}, {reusePath:15});
                }
            }else{
                sources = creep.room.find(FIND_DROPPED_RESOURCES
                , {
                    filter: (stuff) => stuff.amount >= creep.carryCapacity &&
                            stuff.resourceType == RESOURCE_ENERGY
                }
                );
                if (sources.length > 0) {
                    var target = creep.pos.findClosestByRange(sources);
                    if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                    }
                }
            }
            
            
            
            
        } else {
            creep.memory.hauling = true;
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
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_POWER_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
                });
            }
            
            if (targets.length < 1) {
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_TERMINAL &&
                        structure.store[RESOURCE_ENERGY] < 50000
                });
            }
            
            if (targets.length < 1) {
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_LAB &&
                        structure.energy < structure.energyCapacity
                });
            }
            
            if (targets.length < 1) {
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType == STRUCTURE_NUKER &&
                        structure.energy < structure.energyCapacity
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
                    creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                }
            }
        }
    }
};

module.exports = haul;
