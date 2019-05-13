var xmine = {
    run: function(creep) {
        
        if (!creep.pos.isEqualTo(Game.flags[creep.memory.home].pos)) {
            creep.moveTo(Game.flags[creep.memory.home].pos, {reusePath:50});
        } else {
            var sources = creep.room.find(FIND_SOURCES);
            target = creep.pos.findClosestByRange(sources);
            if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {maxRooms:1}, {reusePath:15});
            }
        }

    }
};

module.exports = xmine;
