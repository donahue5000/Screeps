var haul = {

    run: function(creep) {
        if (creep.memory.hauling == true && creep.carry.energy < 1){
            creep.memory.hauling = false;
        }
        
        if(creep.memory.hauling == false && creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_DROPPED_RESOURCES);
            if (sources.length > 0){
                var target = sources[0];
                if (creep.pickup(target) == ERR_NOT_IN_RANGE){
                    creep.moveTo(target);
                }
            }
        }
        else {
            creep.memory.hauling = true;
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
            });
            
            if (targets.length < 1){
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                       return (structure.structureType == STRUCTURE_TOWER) &&
                           structure.energy < structure.energyCapacity;
                   }
                });
            }
            if(targets.length > 0) {
                var target = targets[0];
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = haul;