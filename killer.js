let killer = {
    run: function(creep) {
            
        if (creep.room != Game.flags.kill.room) {
            creep.moveTo(Game.flags.kill, {reusePath:100});
            
            
        } else if (
            // creep.hits < creep.hitsMax - 500
            true
            ){
            if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.kill)[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.flags.kill);
            }
            else if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.kill)[0]) < 0){
                
                
                let target;
                if (creep.memory.intercept == true){
                    target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                        
                    if (!target) {
                        target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                            filter: (struct) => struct.structureType == STRUCTURE_SPAWN
                        });
                    }
                }else{
                    let target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                            filter: (struct) => struct.structureType == STRUCTURE_SPAWN
                        });
                        
                    if (!target) {
                        target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                    }
                }
                
                
                if (!target) {
                    target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType == STRUCTURE_TOWER
                    });
                }
                
                if (!target) {
                     target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                        && struct.structureType != STRUCTURE_RAMPART
                        && struct.structureType != STRUCTURE_POWER_BANK
                    });
                }
                
                if (!target) {
                     target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                        filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
                    });
                }
                
                if (!target) {
                    creep.moveTo(Game.flags.kill);
                }
                if (creep.attack(target) < 0) {
                    creep.moveTo(target, {maxRooms:1});
                }
            }
        } else {
            if (Game.flags.kill){
                creep.moveTo(Game.flags.kill);
            }
        }
    }
};

module.exports = killer;


