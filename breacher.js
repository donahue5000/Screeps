var breacher = {
    run: function(creep) {
        
        if (!creep.memory.midwaybreach){
            if (creep.pos.isEqualTo(Game.flags.midwaybreach)){
                creep.memory.midwaybreach = true;
            } else {
              creep.moveTo(Game.flags.midwaybreach, {reusePath:15});
            }
        }else if (!creep.memory.midwaybreach2){
            if (creep.pos.isEqualTo(Game.flags.midwaybreach2)){
                creep.memory.midwaybreach2 = true;
                creep.memory.role = 'killer';
            } else {
              creep.moveTo(Game.flags.midwaybreach2, {reusePath:100});
            } 
        }else if (!creep.memory.midwaybreach3){
            if (creep.pos.isEqualTo(Game.flags.midwaybreach3)){
                creep.memory.midwaybreach3 = true;
            } else {
              creep.moveTo(Game.flags.midwaybreach3, {reusePath:100});
            } 
        }else 
        
            // if (creep.hits < creep.hitsMax){
            //     creep.heal(creep);
            // }else
        
            if (creep.room != Game.flags.breach.room) {
                creep.moveTo(Game.flags.breach, {reusePath:15});
            } else {
                //    console.log(creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach)));
                if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach)[0]) < 0) {
                        creep.moveTo(Game.flags.breach);
                } else if (creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach).size < 1){
                    creep.memory.role = 'killer';
                }
            }
    }
};

module.exports = breacher;
