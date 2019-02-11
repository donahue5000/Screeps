var haul = {

  run: function(creep) {
    if (creep.memory.hauling == true && creep.carry.energy < 1) {
      creep.memory.hauling = false;
    }

    if (creep.memory.hauling == false && creep.carry.energy < creep.carryCapacity) {
      var sources = creep.room.find(FIND_DROPPED_RESOURCES, {
        filter: (stuff) => stuff.amount > 30
      });
      if (sources.length > 0) {
        var target = creep.pos.findClosestByRange(sources);
        if (creep.pickup(target) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      } else {
        sources = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) =>
            structure.structureType == STRUCTURE_CONTAINER &&
            structure.store[RESOURCE_ENERGY] > 0
        });
        if (sources.length > 0) {
          sources = sources.sort((x1, x2) => x2.store[RESOURCE_ENERGY] - x1.store[RESOURCE_ENERGY]);
        } else {
          sources = creep.room.find(FIND_STRUCTURES, {
            filter: (blerg) =>
              blerg.structureType == STRUCTURE_STORAGE
          });
        }
        if (creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
        }
      }
    } else {
      creep.memory.hauling = true;
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
            structure.energy < structure.energyCapacity;
        }
      });

      if (targets.length < 1) {
        targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_TOWER) &&
              structure.energy < structure.energyCapacity;
          }
        });
      }
      if (targets.length < 1) {
        targets = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => structure.structureType == STRUCTURE_STORAGE
        });
      }

      if (targets.length > 0) {
        var target = creep.pos.findClosestByRange(targets);
        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(target);
        }
      }
    }
  }
};

module.exports = haul;
