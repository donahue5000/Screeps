var powerGrabber = {
    run: function(creep) {
        
        
        
        
        
        
        
        if (!creep.carry[RESOURCE_POWER] > 0){
            if (creep.ticksToLive < 100){
                creep.suicide();
            }else{
                if (creep.room != Game.flags.powergrab.room){
                    creep.moveTo(Game.flags.powergrab, {reusePath:50});
                }else{
                    var stuffs = creep.room.find(FIND_DROPPED_RESOURCES, {
                        filter: stuff => stuff.resourceType == RESOURCE_POWER
                    });
                    if (stuffs.length > 0){
                        if (creep.pickup(stuffs[0]) < 0){
                            creep.moveTo(stuffs[0]);
                        }
                    }else{
                        creep.moveTo(Game.flags.powergrab);
                    }
                }
            }
        }else{
            if (creep.room != Game.spawns[creep.memory.home].room) {
                creep.moveTo(Game.spawns[creep.memory.home], {reusePath:15});
            }else{
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: structure => structure.structureType == 
                    STRUCTURE_STORAGE
                });
                var target = targets[0];
                if (creep.transfer(target, _.findKey(creep.carry)) < 0) {
                    creep.moveTo(target, {maxRooms:1}, {reusePath:15});
                }
            }
        }
            
            
            
            
            
    }
};

module.exports = powerGrabber;


