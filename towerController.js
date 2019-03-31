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
            // }else{
            //         var test = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            //             filter: (structure) => structure.structureType == STRUCTURE_WALL
            //         });
            //         tower.repair(test);
            }
        }
    }
};

module.exports = towerController;
