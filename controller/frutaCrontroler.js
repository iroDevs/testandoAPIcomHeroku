const services = require('../services/services')

function getAll(req, res , next) {
  const retorno = services.getAllFruits();
  return res.status(404).send(`<h1>${retorno}</h1>`);
}

module.exports = {
  getAll,
}