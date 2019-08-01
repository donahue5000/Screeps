let upgrade = {
    run: function(creep) {



        // if (!creep.memory.boosted){
        //     if (creep.room.memory.xgh2o && Game.getObjectById(creep.room.memory.xgh2o).mineralAmount >= 450){
        //         if (Game.getObjectById(creep.room.memory.xgh2o).boostCreep(creep) < 0){
        //             creep.moveTo(Game.getObjectById(creep.room.memory.xgh2o));
        //         } else {
        //             creep.memory.boosted = true;
        //         }
        //     } else if (creep.room.memory.xgh2o2 && Game.getObjectById(creep.room.memory.xgh2o2).mineralAmount >= 450){
        //         if (Game.getObjectById(creep.room.memory.xgh2o2).boostCreep(creep) < 0){
        //             creep.moveTo(Game.getObjectById(creep.room.memory.xgh2o2));
        //         } else {
        //             creep.memory.boosted = true;
        //         }
        //     } else if (creep.room.memory.gh2o && Game.getObjectById(creep.room.memory.gh2o).mineralAmount >= 30){
        //         if (Game.getObjectById(creep.room.memory.gh2o).boostCreep(creep) < 0){
        //             creep.moveTo(Game.getObjectById(creep.room.memory.gh2o));
        //         } else {
        //             creep.memory.boosted = true;
        //         }
        //     } else {
        //         creep.memory.boosted =  true;
        //     }
        // } else {
            
            
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
                if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.storage, {maxRooms:1}, {reusePath:15});
                } 
                  else if (creep.withdraw(creep.room.storage, RESOURCE_ENERGY) < 0){
                    sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) =>
                            structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store[RESOURCE_ENERGY] >= creep.carryCapacity
                    });
                    if (sources.length > 0) {
                        let target = creep.pos.findClosestByRange(sources);
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
                            let target = creep.pos.findClosestByRange(sources);
                            if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
                                creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                            }
                        }
                    }
                }
            }
    // if (creep.signController(creep.room.controller, 'Purge Depot') < 0){
    //     creep.moveTo(creep.room.controller);
        // }
    }
    
    
    
};

module.exports = upgrade;
