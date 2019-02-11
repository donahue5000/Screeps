var killer = {
  run: function(creep) {
    if (creep.room != Game.flags.kill.room) {
      creep.moveTo(Game.flags.kill);
    } else {
      var target = creep.room.find(FIND_HOSTILE_SPAWNS);
      target = target[0];
      if (!target) {
        target = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
          filter: (struct) => struct.structureType != STRUCTURE_CONTROLLER
        });
      }
      if (!target) {
        var target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
      }
      if (!target) {
        creep.moveTo(Game.flags.kill);
      }
      if (creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    }
  }
};

module.exports = killer;
