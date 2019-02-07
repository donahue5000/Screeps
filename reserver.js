var reserver = {
    run: function(creep) {
      if (creep.room != Game.flags.minex.room){
          creep.moveTo(Game.flags.minex);
      }else{
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
      }
    }
};

module.exports = reserver;