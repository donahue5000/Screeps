var xguard = {
    run: function(creep) {
        
        
        // if (creep.hits < creep.hitsMax){
        //     creep.heal(creep);
        // }
            
            
            
            if (creep.room != Game.flags[creep.memory.home].room) {
                creep.moveTo(Game.flags[creep.memory.home], {reusePath:15});
            } else {
                var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                // if (!target) {
                //     target = creep.room.find(FIND_HOSTILE_SPAWNS);
                //     target = target[0];
                // }
                // if (!target) {
                //     target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                //         filter: (struct) => struct.structureType == STRUCTURE_TOWER
                //     });
                // }
                // if (!target) {
                //      target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                //         filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                //         //&& struct.structureType != STRUCTURE_RAMPART
                //     });
                // }
                // if (!target) {
                //      target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                //         filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                //     });
                // }
                if (!target) {
                    if (!creep.pos.inRangeTo(creep.room.controller, 8)){
                        if (creep.moveTo(creep.room.controller) < 0){
                            creep.moveTo(Game.flags[creep.memory.home]);
                        }
                    }
                } else {
                    if (creep.attack(target) < 0) {
                        creep.moveTo(target);
                    }
                }
            }
        
        
        // }else{
        //     creep.moveTo(Game.flags.kill);
        }
        
        
    
};

module.exports = xguard;


