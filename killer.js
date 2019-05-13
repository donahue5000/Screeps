var killer = {
    run: function(creep) {
        
        
        
        if (_.filter(creep.body, function(part){return part.type == 'move'}).length > 0){
            if (creep.hits < creep.hitsMax){
                creep.heal(creep);
            }
        }
        
        if (creep.memory.draining == true){
            creep.moveTo(Game.flags.kill, {reusePath:50});
        }else
            
            
        if (creep.room != Game.flags.kill.room) {
            creep.moveTo(Game.flags.kill, {reusePath:50});
        } else {
            
            if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.kill)[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.flags.kill);
            }
            else if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.kill)[0]) < 0){
            
                var target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType == STRUCTURE_TOWER
                    });
                if (!target) {
                    target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType == STRUCTURE_SPAWN
                    });
                }
                if (!target) {
                    target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                }
                if (!target) {
                     target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                        && struct.structureType != STRUCTURE_RAMPART
                    });
                }
                if (!target) {
                    creep.moveTo(Game.flags.kill);
                }
                if (creep.attack(target) < 0) {
                    creep.moveTo(target);
                }
            }
                
                
                
                // if (creep.room != Game.flags.kill.room) {
                //     creep.moveTo(Game.flags.kill, {reusePath:50});
                // } else {
                //     var target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                //     if (!target) {
                //         target = creep.room.find(FIND_HOSTILE_SPAWNS);
                //         target = target[0];
                //     }
                //     if (!target) {
                //         target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                //             filter: (struct) => struct.structureType == STRUCTURE_TOWER
                //         });
                //     }
                //     if (!target) {
                //          target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                //             filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                //             //&& struct.structureType != STRUCTURE_RAMPART
                //         });
                //     }
                //     if (!target) {
                //          target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                //             filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                //         });
                //     }
                //     if (!target) {
                //         creep.moveTo(Game.flags.kill);
                //     } else 
                //     if (creep.attack(target) < 0) {
                //         creep.moveTo(target);
                //     }
                // }
        
        

        
        }
    }
};

module.exports = killer;


