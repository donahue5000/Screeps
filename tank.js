var tank = {
    run: function(creep) {
        
        // if (!creep.memory.midwaykill){
        //         if (creep.pos.isEqualTo(Game.flags.midwaykill)){
        //             creep.memory.midwaykill = true;
        //         } else {
        //           creep.moveTo(Game.flags.midwaykill, {reusePath:50});
        //         }
        //     }else {
        
            if (creep.room != Game.flags.kill.room) {
                creep.moveTo(Game.flags.kill, {reusePath:50});
            } else {
                var targets = creep.room.find(FIND_MY_CREEPS, {filter: (creeps) =>
                    creeps.hits < creeps.hitsMax
                    && creeps.memory.role == 'tank'
                });
                targets = targets.sort((x1, x2) => {
                    return x1.hits - x2.hits
                });
                if (targets.length > 0){
                    if (creep.heal(targets[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(targets[0], {reusePath:0});
                        //creep.moveTo(Game.flags.kill);
                    }
                } else {
                    creep.moveTo(Game.flags.kill);
                }
            }
        //}
            
    }
};

module.exports = tank;
