//Spawn5a


let Spawn5 = {
    run: function(spawn) {




        let source0 = 0;
        let source1 = 0;

        let mineCount = 0;
        let upgradeCount = 0;
        let buildCount = 0;
        let repairCount = 0;
        let haulCount = 0;
        let mineralBotCount = 0;
        let mineralManagerCount = 0;
        let claimCount = 0;
        let colonistCount = 0;


        for (let name in Game.creeps) {
            let creep = Game.creeps[name];
            if (creep.memory.home == spawn) {
                if (creep.memory.role == 'mine' && creep.ticksToLive > 150) {
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
                } else if (creep.memory.role == 'mineralBot') {
                    mineralBotCount++;
                } else if (creep.memory.role == 'mineralManager') {
                    mineralManagerCount++;
                } else if (creep.memory.role == 'claim') {
                    claimCount++;
                } else if (creep.memory.role == 'colonist' && creep.ticksToLive > 600) {
                    colonistCount++;
                }
            }
        }

        let nextSource = 0;
        if (source0 > 0) {
            nextSource = 1;
        }



        if (haulCount < 1 && Game.spawns[spawn].room.energyAvailable < 450) {
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
                MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (buildCount < 0) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,
                MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY
            ], 'b' + (Game.time), {
                'role': 'build',
                'home': spawn
            });
        } else if (upgradeCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                WORK,WORK,WORK,WORK,WORK,
                MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'u' + (Game.time), {
                'role': 'upgrade',
                'home': spawn
            });
        } else if (repairCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'r' + (Game.time), {
                'role': 'repair',
                'home': spawn
            });
        } else if (mineralBotCount < 0 && Game.spawns[spawn].room.find(FIND_MINERALS)[0].mineralAmount > 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                WORK,WORK,WORK,WORK,WORK,
                CARRY,CARRY,CARRY
            ], 'minBot' + (Game.time), {
                'role': 'mineralBot',
                'home': spawn
            });
        } else if (mineralManagerCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CARRY,CARRY
            ], 'minManager' + (Game.time), {
                'role': 'mineralManager',
                'home': spawn
            });
        } else if (claimCount < 0) {
            Game.spawns[spawn + 'a'].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CLAIM
            ], 'claim' + (Game.time), {
                'role': 'claim',
                'home': spawn
            });
        } else if (colonistCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'colonist' + (Game.time), {
                'role': 'colonist',
                'home': spawn
            });
        }
    }
};

module.exports = Spawn5;
