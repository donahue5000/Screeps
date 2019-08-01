let killerHealer = {
    run: function(creep) {
            

        if (creep.room != Game.flags.killHeal.room) {
            if (creep.hits < creep.hitsMax){
                creep.heal(creep);
            }
            creep.moveTo(Game.flags.killHeal, {reusePath:100});
        } else {
            creep.moveTo(Game.flags.killHeal);
            let target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: x => x.hits < x.hitsMax
            });
            
            if (target){
                if (creep.heal(target) == ERR_NOT_IN_RANGE){
                    creep.rangedHeal(target);
                    creep.moveTo(target, {maxRooms:1});
                }
            } else {
                if (Game.flags.killHeal){
                    creep.moveTo(Game.flags.killHeal);
                    creep.heal(creep);
                }
            }
        }
    }
};

module.exports = killerHealer;


