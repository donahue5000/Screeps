var repair = {
    run: function(creep) {

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_STRUCTURES, {filter: (x) => x.hits < x.hitsMax 
                && x.hitsMax > 25000});
            targets = targets.sort((x1, x2) => {return x1.hits - x2.hits});
            if(targets.length) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
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

module.exports = repair;