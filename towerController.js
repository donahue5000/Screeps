var towerController = {
    run: function(thisRoom) {
        
        var towers = thisRoom.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_TOWER
        });
        for (var tower in towers) {
            tower = towers[tower];
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        }
    }
};

module.exports = towerController;
