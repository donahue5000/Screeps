var powerHealer = {
    run: function(creep) {
        if (creep.room != Game.flags.power.room){
            creep.moveTo(Game.flags.power, {reusePath:50});
        }else{
            
            var targets = creep.room.find(FIND_MY_CREEPS, {
                filter: derp => derp.hits < derp.hitsMax
            });
            targets = targets.sort((x1, x2) => {
                    return x1.hits - x2.hits
            });
            if (targets.length > 0){
                if (creep.memory.closeHeal == true){
                    var target = creep.pos.findClosestByPath(targets);
                    //var target = targets[0];
                    if (creep.heal(target) == ERR_NOT_IN_RANGE){
                        creep.moveTo(target);
                    }
                } else if (creep.rangedHeal(targets[0]) == ERR_NOT_IN_RANGE){
                        creep.moveTo(targets[0], {reusePath:0});
                    }
                    // if (creep.heal(targets[0]) == ERR_NOT_IN_RANGE){
                    //     creep.moveTo(targets[0], {reusePath:0});
                    // }
            } else {
                creep.moveTo(Game.flags.power);
            }
        }
    }
};

module.exports = powerHealer;

