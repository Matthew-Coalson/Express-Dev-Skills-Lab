const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    delete: deleteSkill,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res) {
    Skill.update(req.body, req.params.id);
    res.redirect(`/Skills/${req.params.id}`);
  }
  
  function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id),
      idx: req.params.id
    });
  }
  
  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  
  function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }
  
  function newSkill(req, res) {
    res.render('skills/new');
  }

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill:Skill.getOne(req.params.id),
        todoNum: parseInt(req.params.id) + 1
    });
}

function deleteSkill(req, res) {
    const skillId = parseInt(req.params.id);
    Skill.deleteOne(skillId);
    res.redirect('/skills');
}