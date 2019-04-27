var linkController = {
    run: function(thisRoom) {
        
        var storeLink = Game.getObjectById(thisRoom.memory.storeLink);
        if (storeLink && storeLink.energy < 767){
            var links = thisRoom.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType == STRUCTURE_LINK &&
                structure.id != storeLink.id
            });
            if (links.length > 0){
                for (var link in links){
                    var highLink = links[link];
                    if (highLink.energy > 300){
                        highLink.transferEnergy(Game.getObjectById(thisRoom.memory.storeLink));
                    }
                }
            }
        }
    }
};

module.exports = linkController;