var build = require('build');
var upgrade = require('upgrade');
var mine = require('mine');
var repair = require('repair');
var haul = require('haul');
var xmine = require('xmine');
var xhaul = require('xhaul');
var reserver = require('reserver');
var xbuild = require('xbuild');
var killer = require('killer');
var breacher = require('breacher');
var claim = require('claim');
var colonist = require('colonist');
var Spawn1 = require('Spawn1');
var Spawn2 = require('Spawn2');
var Spawn3 = require('Spawn3');

module.exports.loop = function() {

    for (var name in Memory.creeps) {
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }



    Spawn1.run('Spawn1');
    Spawn2.run('Spawn2');
    Spawn3.run('Spawn3');

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'mine') {
            mine.run(creep);
        } else if (creep.memory.role == 'upgrade') {
            upgrade.run(creep);
        } else if (creep.memory.role == 'build') {
            build.run(creep);
        } else if (creep.memory.role == 'repair') {
            repair.run(creep);
        } else if (creep.memory.role == 'haul') {
            haul.run(creep);
        } else if (creep.memory.role == 'xmine') {
            xmine.run(creep);
        } else if (creep.memory.role == 'xhaul') {
            xhaul.run(creep);
        } else if (creep.memory.role == 'reserver') {
            reserver.run(creep);
        } else if (creep.memory.role == 'xbuild') {
            xbuild.run(creep);
        } else if (creep.memory.role == 'killer') {
            killer.run(creep);
        } else if (creep.memory.role == 'claim') {
            claim.run(creep);
        } else if (creep.memory.role == 'colonist') {
            colonist.run(creep);
        } else if (creep.memory.role == 'breacher') {
            breacher.run(creep);
        }
    }
}
