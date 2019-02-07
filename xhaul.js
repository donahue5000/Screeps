var xhaul = {
    run: function(creep) {

        if (creep.carry.energy == creep.carryCapacity){
            creep.memory.hauling = true;
        }else if (creep.carry.energy == 0){
            creep.memory.hauling = false;
        }

        if (creep.memory.hauling == false){
                if (creep.room != Game.flags.minex.room){
                        creep.moveTo(Game.flags.minex);
                }else{
                    sources = creep.room.find(FIND_STRUCTURES, {filter: (structure) => 
                    structure.structureType == STRUCTURE_CONTAINER});
                    sources = sources.sort((x1, x2) => x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
                    if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(sources[0]);
                    }
                }
        }else{
            if (creep.room != Game.flags.mine0.room){
                creep.moveTo(Game.flags.mine0);
            }else{
                var targets = creep.room.find(FIND_STRUCTURES, {filter: (structure) => 
                    structure.structureType == STRUCTURE_STORAGE});
                var target = creep.pos.findClosestByRange(targets);
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
                
                
                
    }
};

module.exports = xhaul;