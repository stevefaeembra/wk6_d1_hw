const scenario = {
  murderer: 'Mrs. Peacock',
  victim: 'Professor Green',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeMurderer = function(new_murderer) {
    scenario.murderer = new_murderer;
};

const changeVictim = function(new_victim) {
    scenario.victim = new_victim;
};

const changeRoom = function(new_room) {
    scenario.room = new_room;
};

const changeWeapon = function(new_weapon) {
    scenario.weapon = new_weapon;
};

const declare = function() {
  return `${scenario.murderer} murdered ${scenario.victim} in the ${scenario.room} with a ${scenario.weapon}`;
};

changeMurderer('Miss White');
changeWeapon("Lead Pipe");
changeRoom("Back Passage");
changeRoom("Hallway");
changeVictim("Colonel Mustard");
const verdict = declare();
console.log(verdict);
