var breacher = {
    run: function(creep) {
        if (creep.room != Game.flags.breach.room) {
            creep.moveTo(Game.flags.breach);
        } else {
            //    console.log(creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach)));
            if (creep.attack(creep.room.lookForAt(LOOK_STRUCTURES, Game.flags.breach)[0]) < 0) {
                creep.moveTo(Game.flags.breach);
            }
        }
    }
};

module.exports = breacher;
