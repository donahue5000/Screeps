var mineralBot = {
    run: function(creep) {


        if (_.sum(creep.carry) == 0) {
            creep.memory.mining = true;
        }
        if (_.sum(creep.carry) >= creep.carryCapacity) {
            creep.memory.mining = false;
        }
        if (creep.memory.mining) {
            var source = creep.pos.findClosestByRange(FIND_MINERALS);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {maxRooms:1}, {reusePath:15});
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.structureType == STRUCTURE_TERMINAL
            });
            var target = targets[0];
            if (creep.transfer(target, _.findKey(creep.carry)) < 0) {
                creep.moveTo(target, {maxRooms:1}, {reusePath:15});
            }
        }
    }
};
module.exports = mineralBot;
