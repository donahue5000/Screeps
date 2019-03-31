//Spawn5a


var Spawn5 = {
    run: function(spawn) {

        // var towers = Game.spawns[spawn].room.find(FIND_STRUCTURES, {
        //     filter: (structure) => structure.structureType == STRUCTURE_TOWER
        // });
        // for (var tower in towers) {
        //     tower = towers[tower];
        //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        //     if (closestHostile) {
        //         tower.attack(closestHostile);
        //     }
        // }


        var source0 = 0;
        var source1 = 0;

        var mineCount = 0;
        var upgradeCount = 0;
        var buildCount = 0;
        var repairCount = 0;
        var haulCount = 0;
        var xhaulCount = 0;
        var xmineCount = 0;
        var reserverCount = 0;
        var xbuildCount = 0;
        var killerCount = 0;
        var claimCount = 0;
        var colonistCount = 0;
        var breacherCount = 0;
        var tankCount = 0;
        var xguardCount = 0;


        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.home == spawn) {
                if (creep.memory.role == 'mine') {
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
                } else if (creep.memory.role == 'xmine') {
                    xmineCount++;
                } else if (creep.memory.role == 'xhaul') {
                    xhaulCount++;
                } else if (creep.memory.role == 'reserver') {
                    reserverCount++;
                } else if (creep.memory.role == 'xbuild') {
                    xbuildCount++;
                } else if (creep.memory.role == 'killer') {
                    killerCount++;
                } else if (creep.memory.role == 'claim') {
                    claimCount++;
                } else if (creep.memory.role == 'colonist') {
                    colonistCount++;
                } else if (creep.memory.role == 'breacher') {
                    breacherCount++;
                } else if (creep.memory.role == 'tank') {
                    tankCount++;
                } else if (creep.memory.role == 'xguard') {
                    xguardCount++;
                }
            }
        }

        Game.spawns[spawn].memory.source0 = source0;
        Game.spawns[spawn].memory.source1 = source1;

        var nextSource = 0;
        if (source0 > 0) {
            nextSource = 1;
        }



        if (haulCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CARRY,CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (mineCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,
                MOVE
            ], 'm' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        } else if (haulCount < 2) {
            Game.spawns[spawn].createCreep([
                MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (mineCount < 2) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,
                MOVE
            ], 'm' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        } else if (buildCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,
                MOVE,MOVE,
                CARRY,CARRY
            ], 'b' + (Game.time), {
                'role': 'build',
                'home': spawn
            });
        } else if (upgradeCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,
                MOVE,
                CARRY,CARRY
            ], 'u' + (Game.time), {
                'role': 'upgrade',
                'home': spawn
            });
        } else if (repairCount < 2) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,
                MOVE,MOVE,MOVE,MOVE,MOVE,
                CARRY,CARRY,CARRY,CARRY,CARRY,CARRY
            ], 'r' + (Game.time), {
                'role': 'repair',
                'home': spawn
            });
        } else if (xguardCount < 0) {
            Game.spawns[spawn].createCreep([
                TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,
                MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,
                ATTACK,ATTACK
            ], 'xg' + (Game.time), {
                'role': 'xguard',
                'home': spawn
            });
        } else if (xmineCount < 0) {
            Game.spawns[spawn].createCreep([
                WORK,WORK,WORK,WORK,WORK,
                MOVE,MOVE
            ], 'xm' + (Game.time), {
                'role': 'xmine',
                'home': spawn
            });
        } else if (xhaulCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE, MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
            ], 'xh' + (Game.time), {
                'role': 'xhaul',
                'home': spawn
            });
        } else if (reserverCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CLAIM, CLAIM
            ], 'res' + (Game.time), {
                'role': 'reserver',
                'home': spawn
            });
        } else if (xbuildCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY,
                WORK, WORK, ATTACK
            ], 'xb' + (Game.time), {
                'role': 'xbuild',
                'home': spawn
            });
        } else if (tankCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE
            ], 'tank' + (Game.time), {
                'role': 'tank',
                'home': spawn
            });
        } else if (killerCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE
            ], 'killer' + (Game.time), {
                'role': 'killer',
                'home': spawn
            });
        } else if (claimCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CLAIM
            ], 'claim' + (Game.time), {
                'role': 'claim',
                'home': spawn
            });
        } else if (colonistCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,
                WORK,
                CARRY,CARRY,CARRY
            ], 'colonist' + (Game.time), {
                'role': 'colonist',
                'home': spawn
            });
        } else if (breacherCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE
            ], 'breacher' + (Game.time), {
                'role': 'breacher',
                'home': spawn,
                'midwaybreach': true,
                'midwaybreach2': true,
                'midwaybreach3': true
            });
        }
    }
};

module.exports = Spawn5;