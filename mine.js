var mine = {

    run: function(creep) {
        
        var sourceTarget = creep.memory.source;
        
        if (sourceTarget == 0){
            if (!creep.pos.isEqualTo(Game.flags.mine0.pos)){
                creep.moveTo(Game.flags.mine0);
            }else{
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceTarget]);
                }
            }
        }else{
            if (!creep.pos.isEqualTo(Game.flags.mine1.pos)){
                creep.moveTo(Game.flags.mine1);
            }else{
                var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[sourceTarget]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceTarget]);
                }
            }
        }
    }
};

module.exports = mine;