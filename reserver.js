var reserver = {
    run: function(creep) {
        if (creep.room != Game.flags[creep.memory.home].room) {
            creep.moveTo(Game.flags[creep.memory.home], {reusePath:50});
        } else {
            if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            // }else{
            //     creep.signController(creep.room.controller, 'scoopin up the goods :D');
            }
        }
    }
};

module.exports = reserver;
