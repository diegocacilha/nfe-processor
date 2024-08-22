# NFe Processor

Este módulo processa o XML de uma nota fiscal eletrônica (NF-e) e retorna uma lista de produtos em formato JSON, excluindo informações sobre impostos.

## Instalação

```bash
npm install nfe-processor
```

## Usage
```javascript
const parseNFeProducts = require('nfe-processor');

const xml = `<?xml version="1.0" encoding="UTF-8"?><nfeProc><NFe><infNFe><det><prod><cProd>12345</cProd><xProd>Produto 1</xProd><qCom>10</qCom><uCom>un</uCom><vUnCom>100.00</vUnCom><vProd>1000.00</vProd></prod></det><det><prod><cProd>67890</cProd><xProd>Produto 2</xProd><qCom>5</qCom><uCom>un</uCom><vUnCom>200.00</vUnCom><vProd>1000.00</vProd></prod></det></infNFe></NFe></nfeProc>`;

parseNFeProducts(xml)
  .then(produtos => console.log(produtos))
  .catch(err => console.error(err));
```