let claim = {
    run: function(creep) {
        
        if (Game.flags.mid && !creep.memory.mid){
            creep.moveTo(Game.flags.mid, {reusePath:15});
            if (creep.pos.isEqualTo(Game.flags.mid.pos)){
                creep.memory.mid = true;
            }
        } else {
            if (creep.room != Game.flags.colony.room) {
                creep.moveTo(Game.flags.colony, {reusePath:15});
            } else {
                if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                } 
                else {
                    creep.signController(creep.room.controller, 
                        'Purge Depot');
                }
            }
        }
    }
};

module.exports = claim;
