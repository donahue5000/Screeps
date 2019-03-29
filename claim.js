var claim = {
    run: function(creep) {
        if (creep.room != Game.flags.colony.room) {
            creep.moveTo(Game.flags.colony);
        } else {
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            } else {
                creep.signController(creep.room.controller, 
                    'click clack clack... derp... clack click clack');
            }
        }
    }
};

module.exports = claim;
