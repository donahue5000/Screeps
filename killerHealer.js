var killerHealer = {
    run: function(creep) {
            
        if (creep.hits < creep.hitsMax){
            creep.heal(creep);
            creep.moveTo(Game.flags.kill);
        }else{
            if (Game.flags.kill && creep.room != Game.flags.kill.room) {
                creep.moveTo(Game.flags.kill, {reusePath:10});
            } else {
                var target = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
                    filter: x => x.hits < x.hitsMax
                });
                
                if (target){
                    if (creep.heal(target) == ERR_NOT_IN_RANGE){
                        creep.moveTo(target, {reusePath:0});
                    }
                } else {
                    if (Game.flags.kill){
                        creep.moveTo(Game.flags.kill);
                    }
                }
            }
            
            
            
            
            
            
        }
    }
};

module.exports = killerHealer;


