var upgrade = {
    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            sources = creep.room.find(FIND_STRUCTURES, {filter: (structure) => 
                    structure.structureType == STRUCTURE_STORAGE});
            if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[0]);
            }
        }
    }
};

module.exports = upgrade;