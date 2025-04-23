const { people } = require('../data.js');

const addPerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: 'Please provide a name' });
  }
  people.push({ id: people.length + 1, name: req.body.name });
  return res.status(201).json({ success: true, name: req.body.name });
};

const getPeople = (req, res) => res.json(people);

const getPersonById = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({ message: "That person wasn't found" });
  }
  res.status(200).json(person);
};

const updatePerson = (req, res) => {
  const person = people.find((p) => p.id === parseInt(req.params.id));
  if (!person) {
    return res.status(404).json({ message: 'That person was not found' });
  }
  person.name = req.body.name || person.name;
  res.status(200).json(person);
};

const deletePerson = (req, res) => {
  const personIndex = people.findIndex((p) => p.id === parseInt(req.params.id));
  if (personIndex === -1) {
    return res
      .status(404)
      .json({ message: `no person with id ${req.params.id}` });
  }
  people.splice(personIndex, 1);
  res.status(200).json({ message: 'Person deleted' });
};

module.exports = {
  addPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson
};
