var Spawn3 = {
    run: function(spawn) {

        var towers = Game.spawns[spawn].room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_TOWER
        });
        for (var tower in towers) {
            tower = towers[tower];
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        }


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
                }
            }
        }

        Game.spawns[spawn].memory.source0 = source0;
        Game.spawns[spawn].memory.source1 = source1;

        var nextSource = 0;
        if (source0 > 0) {
            nextSource = 1;
        }


        if (mineCount < 2) {
            Game.spawns[spawn].createCreep([
                WORK, WORK, WORK, WORK, WORK,
                MOVE
            ], 'm' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        }
        if (mineCount < 1 && Game.spawns[spawn].room.energyAvailable < 550) {
            Game.spawns[spawn].createCreep([
                WORK, WORK,
                MOVE
            ], 'emergmine' + (Game.time), {
                'role': 'mine',
                'source': nextSource,
                'home': spawn
            });
        }
        if (haulCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE, MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
            ], 'h' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        }
        if (haulCount < 1 && Game.spawns[spawn].room.energyAvailable < 1000) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY
            ], 'emergh' + (Game.time), {
                'role': 'haul',
                'home': spawn
            });
        } else if (upgradeCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK, WORK,
                MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY
            ], 'u' + (Game.time), {
                'role': 'upgrade',
                'home': spawn
            });
        } else if (buildCount < 2) {
            Game.spawns[spawn].createCreep([
                WORK, WORK, WORK,
                MOVE, MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
            ], 'b' + (Game.time), {
                'role': 'build',
                'home': spawn
            });
        } else if (repairCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK, WORK,
                MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY
            ], 'r' + (Game.time), {
                'role': 'repair',
                'home': spawn
            });
        } else if (xmineCount < 1) {
            Game.spawns[spawn].createCreep([
                WORK, WORK, WORK, WORK, WORK,
                MOVE, MOVE
            ], 'xm' + (Game.time), {
                'role': 'xmine',
                'home': spawn
            });
        } else if (xhaulCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE, MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
            ], 'xh' + (Game.time), {
                'role': 'xhaul',
                'home': spawn
            });
        } else if (reserverCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE,
                CLAIM, CLAIM
            ], 'res' + (Game.time), {
                'role': 'reserver',
                'home': spawn
            });
        } else if (xbuildCount < 1) {
            Game.spawns[spawn].createCreep([
                MOVE, MOVE, MOVE,
                CARRY, CARRY, CARRY,
                WORK, WORK, WORK
            ], 'xb' + (Game.time), {
                'role': 'xbuild',
                'home': spawn
            });
        } else if (killerCount < 0) {
            Game.spawns[spawn].createCreep([
                //TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                MOVE, MOVE, MOVE,
                ATTACK, ATTACK, ATTACK
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
                CARRY,
                WORK
            ], 'colonist' + (Game.time), {
                'role': 'colonist',
                'home': spawn
            });
        } else if (breacherCount < 0) {
            Game.spawns[spawn].createCreep([
                MOVE,
                ATTACK
            ], 'breacher' + (Game.time), {
                'role': 'breacher',
                'home': spawn
            });
        }
    }
};

module.exports = Spawn3;
