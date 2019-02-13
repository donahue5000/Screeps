var upgrade = {
  run: function(creep) {

    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
    }
    if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
    }

    if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    } else {
      var sources = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) =>
          structure.structureType == STRUCTURE_STORAGE
      });
      if (sources.length > 0) {
        if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
        }
      } else {
        sources = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) =>
            structure.structureType == STRUCTURE_CONTAINER &&
            structure.store[RESOURCE_ENERGY] > 0
        });
        if (sources.length > 0) {
          sources = sources.sort((x1, x2) => x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
          if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
          }
        } else {
          sources = creep.room.find(FIND_DROPPED_RESOURCES, {
            filter: (stuff) => stuff.amount > 50
          });
          if (sources.length > 0) {
            var target = sources[0];
            if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
              creep.moveTo(target);
            }
          }
        }
      }
    }
  }
};

module.exports = upgrade;
