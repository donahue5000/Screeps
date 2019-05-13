var powerHarvester = {
    run: function(creep) {
        // if (creep.hits < creep.hitsMax){
        //     creep.moveTo(Game.flags.power);
        // }
        if (creep.room != Game.flags.power.room){
            creep.moveTo(Game.flags.power, {reusePath:50});
        }else{
            if (creep.hits > 100){
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: structure => structure.structureType == STRUCTURE_POWER_BANK
                });
                if (targets.length > 0){
                    var target = targets[0];
                    if (creep.attack(target) == ERR_NOT_IN_RANGE){
                        creep.moveTo(target);
                    }else if (creep.attack(target) == ERR_NO_PATH){
                        creep.moveTo(Game.flags.power);
                    }
                }else{
                    creep.moveTo(Game.flags.power);
                }
            }
        }
    }
};

module.exports = powerHarvester;


