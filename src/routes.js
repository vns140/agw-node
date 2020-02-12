const routes = require('express').Router()
const BeneficiarioController = require('./controllers/beneficiarioController')

routes.post('/saldo', BeneficiarioController.saldo);
routes.post('/extrato', BeneficiarioController.extrato);

module.exports = routes