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
            var sources = creep.room.find(FIND_DROPPED_RESOURCES);
            if (sources.length > 0){
                var target = sources[0];
                if (creep.pickup(target) == ERR_NOT_IN_RANGE){
                    creep.moveTo(target);
                }
            }
        }
    }
};

module.exports = upgrade;