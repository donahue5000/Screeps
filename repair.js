var repair = {
  run: function(creep) {

    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
    }

    if (creep.memory.building) {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (x) => x.hits < x.hitsMax &&
          x.hitsMax > 25000
      });
      targets = targets.sort((x1, x2) => {
        return x1.hits - x2.hits
      });
      if (targets.length) {
        if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
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
            filter: (stuff) => stuff.amount > 200
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

module.exports = repair;
