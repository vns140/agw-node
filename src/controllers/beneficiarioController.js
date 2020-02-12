const Beneficiario = require('../models/beneficiario')

class BeneficiarioController {

	async extrato(req, res, next) {
		try{
			const extrato = await Beneficiario.extrato(req.body)
			console.log('.')
			return res.json(extrato)
		}catch(e){
			return res.status(400)
								.json({ error: e.message })
		}	
	}
	async saldo(req, res, next) {
		try{
			const saldo = await Beneficiario.saldo(req.body)
			console.log('.')

			return res.json(saldo)
		}catch(e){
			return res.status(400)
								.json({ error: e.message })
		}	
	}

}

module.exports = new BeneficiarioController();
