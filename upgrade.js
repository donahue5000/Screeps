var upgrade = {
    run: function(creep) {


        if (creep.carry[RESOURCE_POWER] > 0 || (creep.room.memory.processing == true && creep.carry.energy == 0)) {
            if (creep.carry[RESOURCE_POWER] > 0){
                console.log('bringin juice');
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: structure => structure.structureType == 
                    STRUCTURE_POWER_SPAWN
                });
                var target = targets[0];
                if (creep.transfer(target, RESOURCE_POWER) < 0) {
                    creep.moveTo(target);
                }
            } else if (creep.ticksToLive > 50) {
                console.log('getting juice');
                if (creep.withdraw(creep.room.storage, RESOURCE_POWER, 50) < 0){
                    creep.moveTo(creep.room.storage);
                }
            }
            
            
            
            
            
            
        }else{
            if (creep.memory.upgrading && creep.carry.energy == 0) {
                creep.memory.upgrading = false;
            }
            if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
                creep.memory.upgrading = true;
            }
    
            if (creep.memory.upgrading) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE
                        && creep.fatigue == 0) {
                    creep.moveTo(creep.room.controller, {maxRooms:1}, {reusePath:15});
                }
            } else if (creep.fatigue == 0) {
                var sources = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) =>
                        structure.structureType == STRUCTURE_STORAGE &&
                        structure.store[RESOURCE_ENERGY] >= creep.carryCapacity
                });
                if (sources.length > 0) {
                    if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                } else {
                    sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>
                            structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store[RESOURCE_ENERGY] >= creep.carryCapacity
                    });
                    if (sources.length > 0) {
                        var target = creep.pos.findClosestByRange(sources);
                        if (creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                        }
                    } else {
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
                }
            }
        }
        
        
        // if (creep.signController(creep.room.controller, '') < 0){
        //     creep.moveTo(creep.room.controller);
        // }
    }
    
};

module.exports = upgrade;
