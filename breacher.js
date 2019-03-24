var breacher = {
    run: function(creep) {
        
        if (!creep.memory.midwaybreach){
            if (creep.pos.isEqualTo(Game.flags.midwaybreach)){
                creep.memory.midwaybreach = true;
            } else {
              creep.moveTo(Game.flags.midwaybreach, {reusePath:15});
            }
        // }else if (!creep.memory.midwaybreach2){
        //     if (creep.pos.isEqualTo(Game.flags.midwaybreach2)){
        //         creep.memory.midwaybreach2 = true;
        //         creep.memory.role = 'killer';
        //     } else {
        //       creep.moveTo(Game.flags.midwaybreach2, {reusePath:100});
        //     } 
        // }else if (!creep.memory.midwaybreach3){
        //     if (creep.pos.isEqualTo(Game.flags.midwaybreach3)){
        //         creep.memory.midwaybreach3 = true;
        //     } else {
        //       creep.moveTo(Game.flags.midwaybreach3, {reusePath:100});
        //     } 
        // }else 
        
            // if (creep.hits < creep.hitsMax){
            //     creep.heal(creep);
            }else
        
            if (creep.room != Game.flags.breach.room) {
                creep.moveTo(Game.flags.breach, {reusePath:50});
            } else {
                if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach)[0]) < 0) {
                        creep.moveTo(Game.flags.breach);
                }
            }
            
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
            //             && struct.structureType != STRUCTURE_RAMPART
            //         });
            //     }
            //     if (!target) {
            //          target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //             filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
            //         });
            //     }
            //     if (!target) {
            //         creep.moveTo(Game.flags.breach);
            //     } else 
            //     if (creep.attack(target) == ERR_NOT_IN_RANGE) {
            //         creep.moveTo(target, {reusePath:0});
            //     }
            // }
    }
};

module.exports = breacher;
