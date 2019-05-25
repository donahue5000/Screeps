var mine = {

    run: function(creep) {

        var sourceTarget = creep.memory.source;

        if (sourceTarget == 0) {
            var pos0 = new RoomPosition(
                creep.room.memory.mine0x, creep.room.memory.mine0y, creep.room.name)
            if (!creep.pos.isEqualTo(pos0)) {
                creep.moveTo(pos0, {maxRooms:1}, {reusePath:15});
            } else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[sourceTarget], {maxRooms:1}, {reusePath:15});
                }
            }
        } else {
            var pos1 = new RoomPosition(
                creep.room.memory.mine1x, creep.room.memory.mine1y, creep.room.name)
            if (!creep.pos.isEqualTo(pos1)) {
                creep.moveTo(pos1, {maxRooms:1}, {reusePath:15});
            } else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[sourceTarget], {maxRooms:1}, {reusePath:15});
                }
            }
        }
        
        
        
        if (creep.carryCapacity > 0 && creep.carry[RESOURCE_ENERGY] == creep.carryCapacity){
            
            
            var thisLink = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                filter: (thing) => thing.structureType == STRUCTURE_LINK && 
                    thing.energy < thing.energyCapacity
            });
            if (thisLink){
                if (creep.pos.getRangeTo(thisLink) == 1){
                    creep.transfer(thisLink, RESOURCE_ENERGY);
                }
            }
        }
        
        
        
        
        
    }
};

module.exports = mine;
