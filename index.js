// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)


function waitAndLog(Time, DoneWalking) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(DoneWalking);
            resolve();
        }, 3000);
    });
}

// have the NPC start walking east immediately
npc.walkEast(1000)
    .then(() => waitAndLog(1400, "Done walking east"))
    .then(() => npc.walkEast(1400))
    .then(() => waitAndLog(300, "Done walking south"))
    .then(() => npc.walkSouth(300))
    .then(() => waitAndLog(1500, "Done walking east again"))
    .then(() => npc.walkEast(1500))
    .then(() => waitAndLog(800, "Done walking south again"))
    .then(() => npc.walkSouth(800))
    .then(() => waitAndLog(2400, "Done walking west"))
    .then(() => npc.walkWest(2400))
    .then(() => waitAndLog(2300, "Done walking north"))
    .then(() => npc.walkNorth(2300))
    .catch(error => {
        console.log('Error during NPC movement:', error);
    });
// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


