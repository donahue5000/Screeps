var panicButton = {
    run: function(thisRoom) {
        
        
        
        var intruders = thisRoom.find(FIND_HOSTILE_CREEPS);
        if (intruders.length > 0){
            Memory.activeDefenseMode++;
            console.log(intruders.length + ' Intruders in Room ' + thisRoom.name);
            var defenses = thisRoom.find(FIND_STRUCTURES, {
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