let mineralManager = {

    run: function(creep) {
        

        
        let nukers = creep.room.find(FIND_MY_STRUCTURES, {
            filter: (thing) => thing.structureType == STRUCTURE_NUKER
        });
        
        // if (creep.room.memory.g){
        //     if ((Game.getObjectById(creep.room.memory.g).mineralAmount == 3000 || creep.carry[RESOURCE_GHODIUM]) && 
        //             (nukers.length < 1 || nukers[0].ghodium == 5000)){
        //         creep.memory.haulG = true;
        //     } else if (Game.getObjectById(creep.room.memory.g).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_GHODIUM]){
        //         creep.memory.haulG = false;
        //     }
            
        //     if (creep.memory.haulG == true){
        //         if (creep.carry[RESOURCE_GHODIUM] > 0){
        //             if (creep.transfer(creep.room.terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
        //                 creep.moveTo(creep.room.terminal, {ignoreCreeps: true});
        //             }
        //         } else {
        //             if (creep.withdraw(Game.getObjectById(creep.room.memory.g), RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
        //                 creep.moveTo(Game.getObjectById(creep.room.memory.g), {ignoreCreeps: true});
        //             }
        //         }
        //     }
        // }
        
        
        if (creep.room.memory.gh){
            if (Game.getObjectById(creep.room.memory.gh).mineralAmount == 3000 && _.sum(creep.carry) == 0){
                console.log('gh needs pickup');
                creep.memory.haulGH = true;
            } else if (Game.getObjectById(creep.room.memory.gh).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_GHODIUM_HYDRIDE]){
                creep.memory.haulGH = false;
            }
            
            if (creep.memory.haulGH == true){
                if (creep.carry[RESOURCE_GHODIUM_HYDRIDE] > 0){
                    if (creep.transfer(creep.room.terminal, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                } else {
                    if (creep.withdraw(Game.getObjectById(creep.room.memory.gh), RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(creep.room.memory.gh));
                    }
                }
            }
        }
        
        if (creep.room.memory.gh1){
            if (Game.getObjectById(creep.room.memory.gh1).mineralAmount == 3000 && _.sum(creep.carry) == 0){
                console.log('gh1 needs pickup');
                creep.memory.haulGH1 = true;
            } else if (Game.getObjectById(creep.room.memory.gh1).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_GHODIUM_HYDRIDE]){
                creep.memory.haulGH1 = false;
            }
            
            if (creep.memory.haulGH1 == true){
                if (creep.carry[RESOURCE_GHODIUM_HYDRIDE] > 0){
                    if (creep.transfer(creep.room.terminal, RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                } else {
                    if (creep.withdraw(Game.getObjectById(creep.room.memory.gh1), RESOURCE_GHODIUM_HYDRIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(creep.room.memory.gh1));
                    }
                }
            }
        }
        
        
        if (creep.room.memory.oh){
            if (Game.getObjectById(creep.room.memory.oh).mineralAmount == 3000 && _.sum(creep.carry) == 0){
                creep.memory.haulOH = true;
            } else if (Game.getObjectById(creep.room.memory.oh).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_HYDROXIDE]){
                creep.memory.haulOH = false;
            }
            
            if (creep.memory.haulOH == true){
                if (creep.carry[RESOURCE_HYDROXIDE] > 0){
                    if (creep.transfer(creep.room.terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                } else {
                    if (creep.withdraw(Game.getObjectById(creep.room.memory.oh), RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(creep.room.memory.oh));
                    }
                }
            }
        }
        
        if (creep.room.memory.oh2){
            if (Game.getObjectById(creep.room.memory.oh2).mineralAmount == 3000 && _.sum(creep.carry) == 0){
                creep.memory.haulOH2 = true;
            } else if (Game.getObjectById(creep.room.memory.oh2).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_HYDROXIDE]){
                creep.memory.haulOH2 = false;
            }
            
            if (creep.memory.haulOH2 == true){
                if (creep.carry[RESOURCE_HYDROXIDE] > 0){
                    if (creep.transfer(creep.room.terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                } else {
                    if (creep.withdraw(Game.getObjectById(creep.room.memory.oh2), RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(creep.room.memory.oh2));
                    }
                }
            }
        }
        
        if (creep.room.memory.oh3){
            if (Game.getObjectById(creep.room.memory.oh3).mineralAmount == 3000 && _.sum(creep.carry) == 0){
                creep.memory.haulOH3 = true;
            } else if (Game.getObjectById(creep.room.memory.oh3).mineralAmount < creep.carryCapacity && !creep.carry[RESOURCE_HYDROXIDE]){
                creep.memory.haulOH3 = false;
            }
            
            if (creep.memory.haulOH3 == true){
                if (creep.carry[RESOURCE_HYDROXIDE] > 0){
                    if (creep.transfer(creep.room.terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                } else {
                    if (creep.withdraw(Game.getObjectById(creep.room.memory.oh3), RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE){
                        creep.moveTo(Game.getObjectById(creep.room.memory.oh3));
                    }
                }
            }
        }
        
        
        
        if (!creep.memory.haulG && !creep.memory.haulOH && !creep.memory.haulOH2 && !creep.memory.haulOH3 && !creep.memory.haulGH && !creep.memory.haulGH1) {
            if (nukers.length > 0 && nukers[0].ghodium < 5000 && 
                    creep.room.terminal.store[RESOURCE_GHODIUM] > 0){
                if (creep.carry[RESOURCE_GHODIUM]){
                    if (creep.transfer(nukers[0], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(nukers[0]);
                    }
                } else {
                    if (creep.withdraw(creep.room.terminal, RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE){
                        creep.moveTo(creep.room.terminal);
                    }
                }
            }else{
                let thing;
                let place;
                if (creep.carry[RESOURCE_ZYNTHIUM]){
                    thing = RESOURCE_ZYNTHIUM;
                    place = 'z';
                } else if (creep.carry[RESOURCE_UTRIUM]){
                    thing = RESOURCE_UTRIUM;
                    place = 'u';
                } else if (creep.carry[RESOURCE_KEANIUM]){
                    thing = RESOURCE_KEANIUM;
                    place = 'k';
                } else if (creep.carry[RESOURCE_LEMERGIUM]){
                    thing = RESOURCE_LEMERGIUM;
                    place = 'l';
                } else if (creep.carry[RESOURCE_HYDROXIDE]){
                    thing = RESOURCE_HYDROXIDE;
                    place = 'inputOH';
                } else if (creep.carry[RESOURCE_CATALYST]){
                    thing = RESOURCE_CATALYST;
                    place = 'inputX';
                } else if (creep.carry[RESOURCE_GHODIUM_HYDRIDE]){
                    thing = RESOURCE_GHODIUM_HYDRIDE;
                    place = 'inputGH';
                } else if (creep.carry[RESOURCE_OXYGEN]){
                    if (creep.room.memory.o && Game.getObjectById(creep.room.memory.o).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o';
                    }
                    if (creep.room.memory.o2 && Game.getObjectById(creep.room.memory.o2).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o2';
                    }
                    if (creep.room.memory.o3 && Game.getObjectById(creep.room.memory.o3).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o3';
                    }
                } else if (creep.carry[RESOURCE_HYDROGEN]){
                    if (creep.room.memory.h && Game.getObjectById(creep.room.memory.h).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h';
                    }
                    if (creep.room.memory.h2 && Game.getObjectById(creep.room.memory.h2).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h2';
                    }
                    if (creep.room.memory.h3 && Game.getObjectById(creep.room.memory.h3).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h3';
                    }
                } else {
                    if (creep.room.memory.o && Game.getObjectById(creep.room.memory.o).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o';
                    }
                    if (creep.room.memory.h && Game.getObjectById(creep.room.memory.h).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h';
                    }
                    if (creep.room.memory.o2 && Game.getObjectById(creep.room.memory.o2).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o2';
                    }
                    if (creep.room.memory.h2 && Game.getObjectById(creep.room.memory.h2).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h2';
                    }
                    if (creep.room.memory.o3 && Game.getObjectById(creep.room.memory.o3).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_OXYGEN;
                        place = 'o3';
                    }
                    if (creep.room.memory.h3 && Game.getObjectById(creep.room.memory.h3).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROGEN;
                        place = 'h3';
                    }
                    if (creep.room.memory.z && Game.getObjectById(creep.room.memory.z).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_ZYNTHIUM;
                        place = 'z';
                    }
                    if (creep.room.memory.u && Game.getObjectById(creep.room.memory.u).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_UTRIUM;
                        place = 'u';
                    }
                    if (creep.room.memory.k && Game.getObjectById(creep.room.memory.k).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_KEANIUM;
                        place = 'k';
                    }
                    if (creep.room.memory.l && Game.getObjectById(creep.room.memory.l).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_LEMERGIUM;
                        place = 'l';
                    }
                    if (creep.room.memory.inputGH && Game.getObjectById(creep.room.memory.inputGH).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_GHODIUM_HYDRIDE;
                        place = 'inputGH';
                    }
                    if (creep.room.memory.inputOH && Game.getObjectById(creep.room.memory.inputOH).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_HYDROXIDE;
                        place = 'inputOH';
                    }
                    if (creep.room.memory.inputX && Game.getObjectById(creep.room.memory.inputX).mineralAmount < 3000 - creep.carryCapacity){
                        thing = RESOURCE_CATALYST;
                        place = 'inputX';
                    }
                }
                
                if (thing){
                    if (!creep.carry[thing]){
                        if (creep.withdraw(creep.room.terminal, thing) == ERR_NOT_IN_RANGE){
                            creep.moveTo(creep.room.terminal);
                        }
                    } else {
                        if (creep.transfer(Game.getObjectById(creep.room.memory[place]), thing) == ERR_NOT_IN_RANGE){
                            creep.moveTo(Game.getObjectById(creep.room.memory[place]));
                        }
                    }
                } else {
                    creep.moveTo(creep.room.terminal);
                }
            }
        }
    }
};

module.exports = mineralManager;
