const skills = [
    {skill: 'Typing', aptitude: '3'},
    {skill: 'Logic', aptitude: '4'},
    {skill: 'Growth Mindset', aptitude: '5'},
    {skill: 'Style OCDness', aptitude: '9'},
];

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update
};

function create(skill) {
    skills.push(skill);
  }

function update(skill, id) {
    skills.splice(id, 1, skill);
  }

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function deleteOne(id) {
    skills.splice(id, 1);
}
