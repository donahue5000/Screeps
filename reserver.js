var reserver = {
    run: function(creep) {
        if (creep.room != Game.flags[creep.memory.home].room) {
            creep.moveTo(Game.flags[creep.memory.home]);
        } else {
            if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};

module.exports = reserver;
