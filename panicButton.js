let panicButton = {
    run: function(thisRoom) {
        
        
        
        let intruders = thisRoom.find(FIND_HOSTILE_CREEPS);
        if (intruders.length > 0){
            
            let towers = thisRoom.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_TOWER
            });
            for (let tower in towers) {
                tower = towers[tower];
                let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile) {
                    tower.attack(closestHostile);
                    console.log(thisRoom.name + ' blastin at ' + closestHostile.owner.username);
                }
            }
            
            Memory.activeDefenseMode++;
            console.log(intruders.length + ' Intruders in Room ' + thisRoom.name);
            let defenses = thisRoom.find(FIND_STRUCTURES, {
                filter: (thing) => (thing.structureType == STRUCTURE_WALL ||
                    thing.structureType == STRUCTURE_RAMPART) &&
                    thing.hits < 100000
            });
            if (defenses.length > 0){
                console.log('ROOM ' + thisRoom.name + ' FAILING *** ACTIVATING LAST RESORT PROTOCOL');
                thisRoom.controller.activateSafeMode();
            }
        }
    }
};

module.exports = panicButton;