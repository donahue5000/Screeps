var claim = {
    run: function(creep) {
        if (creep.room != Game.flags.colony.room) {
              if (creep.pos.isEqualTo(Game.flags.midway.pos)) {
                creep.memory.midway = true;
              }
              if (!creep.memory.midway) {
                creep.moveTo(Game.flags.midway);
              } else {
            creep.moveTo(Game.flags.colony);
              }
        } else {
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            } else {
                creep.attackController(creep.room.controller);
            }
        }
        
    }
};

module.exports = claim;
