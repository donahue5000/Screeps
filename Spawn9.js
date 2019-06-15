var Spawn9 = {
    run: function(spawn) {




        var source0 = 0;
        var source1 = 0;

        var mineCount = 0;
        var upgradeCount = 0;
        var buildCount = 0;
        var repairCount = 0;
        var haulCount = 0;
        var killerCount = 0;
        var killerHealerCount = 0;
        var claimCount = 0;
        var colonistCount = 0;
        var mineralBotCount = 0;
        var mineralManagerCount = 0;


        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.home == spawn) {
                if (creep.memory.role == 'mine' && creep.ticksToLive > 80) {
                    mineCount++;
                    if (creep.memory.source == 0) {
                        source0++;
                    } else if (creep.memory.source == 1) {
                        source1++;
                    }
                } else if (creep.memory.role == 'upgrade') {
                    upgradeCount++;
                } else if (creep.memory.role == 'build') {
                    buildCount++;
                } else if (creep.memory.role == 'repair') {
                    repairCount++;
                } else if (creep.memory.role == 'haul') {
                    haulCount++;
                } else if (creep.memory.role == 'killer') {
                    killerCount++;
                } else if (creep.memory.role == 'killerHealer') {
                    killerHealerCount++;
                } else if (creep.memory.role == 'claim') {
                    claimCount++;
                } else if (creep.memory.role == 'colonist' && creep.ticksToLive > 200) {
                    colonistCount++;
                } else if (creep.memory.role == 'mineralBot') {
                    mineralBotCount++;
                } else if (creep.memory.role == 'mineralManager') {
                    mineralManagerCount++;
                }
            }
        }

        var nextSource = 0;
        if (source0 > 0) {
            nextSource = 1;
        }



        if (haulCount < 1 && Game.spawns[spawn].room.energyAvailable < 750) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (mineCount < 1 && Game.spawns[spawn].room.energyAvailable < 600) {
             Game.spawns[spawn].createCreep([
                WORK,WORK,
                MOVE,CARRY
            ], 'm' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        } else if (mineCount < 2) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,
                MOVE,CARRY
            ], 'm' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        } else if (haulCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (killerHealerCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                HEAL,HEAL,HEAL,HEAL,HEAL,HEAL
            ], 'healer' + (Game.time), {
                'role': 'killerHealer',
                'home': spawn
            });
        } else if (killerCount < 0) {
            Game.spawns[spawn].createCreep([
                ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,
                ATTACK,ATTACK,
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                MOVE,MOVE
            ], 'killer' + (Game.time), {
                'role': 'killer',
                'home': spawn,
                'intercept': true
            });
        } else if (claimCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CLAIM
            ], 'claim' + (Game.time), {
                'role': 'claim',
                'home': spawn
            });
        } else if (buildCount < 0) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                WORK,WORK,WORK,WORK,WORK,
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,
                CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'b' + (Game.time), {
                'role': 'build',
                'home': spawn
            });
        } else if (upgradeCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                WORK,WORK,WORK,WORK,WORK,
                MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'u' + (Game.time), {
                'role': 'upgrade',
                'home': spawn
            });
        } else if (repairCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'r' + (Game.time), {
                'role': 'repair',
                'home': spawn
            });
        } else if (colonistCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                WORK,WORK,WORK,WORK,WORK,
                CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'colonist' + (Game.time), {
                'role': 'colonist',
                'home': spawn
            });
        } else if (mineralBotCount < 1 && Game.spawns[spawn].room.find(FIND_MINERALS)[0].mineralAmount > 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,
                WORK,WORK,WORK,WORK,WORK,
                CARRY,CARRY,CARRY
            ], 'minBot' + (Game.time), {
                'role': 'mineralBot',
                'home': spawn
            });
        } else if (mineralManagerCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CARRY,CARRY
            ], 'minManager' + (Game.time), {
                'role': 'mineralManager',
                'home': spawn
            });
        }
    }
};

module.exports = Spawn9;
