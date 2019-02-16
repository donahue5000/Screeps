var mine = {

    run: function(creep) {

        var sourceTarget = creep.memory.source;

        if (sourceTarget == 0) {
            var pos0 = new RoomPosition(
                creep.room.memory.mine0x, creep.room.memory.mine0y, creep.room.name)
            if (!creep.pos.isEqualTo(pos0)) {
                creep.moveTo(pos0);
            } else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[sourceTarget]);
                }
            }
        } else {
            var pos1 = new RoomPosition(
                creep.room.memory.mine1x, creep.room.memory.mine1y, creep.room.name)
            if (!creep.pos.isEqualTo(pos1)) {
                creep.moveTo(pos1);
            } else {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[sourceTarget]);
                }
            }
        }
    }
};

module.exports = mine;
