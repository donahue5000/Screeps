var labController = {
    run: function(thisRoom) {
        
        if (thisRoom.memory.z && thisRoom.memory.k && 
                Game.getObjectById(thisRoom.memory.z).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.k).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.zk).runReaction(Game.getObjectById(thisRoom.memory.z), Game.getObjectById(thisRoom.memory.k));
        }
        if (thisRoom.memory.u && thisRoom.memory.l && 
                Game.getObjectById(thisRoom.memory.u).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.l).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.ul).runReaction(Game.getObjectById(thisRoom.memory.u), Game.getObjectById(thisRoom.memory.l));
        }
        if (thisRoom.memory.zk && thisRoom.memory.ul && 
                Game.getObjectById(thisRoom.memory.zk).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.ul).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.g).runReaction(Game.getObjectById(thisRoom.memory.zk), Game.getObjectById(thisRoom.memory.ul));
        }
        if (thisRoom.memory.o && thisRoom.memory.h && 
                Game.getObjectById(thisRoom.memory.o).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.h).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.oh).runReaction(Game.getObjectById(thisRoom.memory.o), Game.getObjectById(thisRoom.memory.h));
        }
        if (thisRoom.memory.o2 && thisRoom.memory.h2 && 
                Game.getObjectById(thisRoom.memory.o2).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.h2).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.oh2).runReaction(Game.getObjectById(thisRoom.memory.o2), Game.getObjectById(thisRoom.memory.h2));
        }
        if (thisRoom.memory.o3 && thisRoom.memory.h3 && 
                Game.getObjectById(thisRoom.memory.o3).mineralAmount > 0 && Game.getObjectById(thisRoom.memory.h3).mineralAmount > 0){
            Game.getObjectById(thisRoom.memory.oh3).runReaction(Game.getObjectById(thisRoom.memory.o3), Game.getObjectById(thisRoom.memory.h3));
        }
        
        
    }
};

module.exports = labController;