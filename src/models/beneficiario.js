const soapRequest = require('easy-soap-request');

const { WSDLURL} = require('../config/app')

const headers = {
	'user-agent': 'sampleTest',
	'Content-Type': 'text/xml;charset=UTF-8',
	'soapAction': WSDLURL,
};

class BeneficiarioModel {

	async extrato(parameters) {

		const {
			cnpjEmissor,
			cpfBeneficiario,
			numeroCartao,
			dataInicial,
			dataFinal,
		} = parameters; 


		let consultaXML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:core="http://core.smartnet.com.br">
   <soapenv:Header/>
   <soapenv:Body>
      <core:consultarExtrato>
         <arg0>
            <cnpjEmissor>${cnpjEmissor}</cnpjEmissor>
            <cpfBeneficiario>${cpfBeneficiario}</cpfBeneficiario>
            <numeroCartao>${numeroCartao}</numeroCartao>
            <dataInicial>${dataInicial}</dataInicial>
            <dataFinal>${dataFinal}</dataFinal>
         </arg0>
      </core:consultarExtrato>
   </soapenv:Body>
</soapenv:Envelope>
		`;

			const { response } = await soapRequest({
				url: WSDLURL,
				headers,
				xml: consultaXML
			});

				return await response;
	};
	
	async saldo(parameters) {

		const {
			cpfBeneficiario,
			numeroCartao,

		} = parameters; 


		let consultaXML = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:core="http://core.smartnet.com.br">
		<soapenv:Header/>
		<soapenv:Body>
			 <core:consultarSaldo>
					<!--Optional:-->
					<arg0>
						 <!--Optional:-->
						 <cpfBeneficiario>${cpfBeneficiario}</cpfBeneficiario>
						 <!--Optional:-->
						 <numeroCartao>${numeroCartao}</numeroCartao>
					</arg0>
			 </core:consultarSaldo>
		</soapenv:Body>
 </soapenv:Envelope>`;

			const { response } = await soapRequest({
				url: WSDLURL,
				headers,
				xml: consultaXML
			});

				return await response;
	};

}

module.exports = new BeneficiarioModel()

