const xml2js = require('xml2js');

function parseNFeProducts(xmlString) {
  const parser = new xml2js.Parser({ explicitArray: false });
  
  return parser.parseStringPromise(xmlString)
    .then(result => {
      const produtos = [];
      const items = result.nfeProc.NFe.infNFe.det;

      if (!Array.isArray(items)) {
        items = [items]; // Garantir que sempre temos uma lista
      }

      items.forEach(item => {
        const produto = item.prod;
        produtos.push({
          codigo: produto.cProd,
          descricao: produto.xProd,
          quantidade: produto.qCom,
          unidade: produto.uCom,
          valorUnitario: produto.vUnCom,
          valorTotal: produto.vProd,
        });
      });

      return produtos;
    })
    .catch(err => {
      throw new Error('Erro ao processar o XML: ' + err.message);
    });
}

module.exports = parseNFeProducts;
