const { deepStrictEqual, ok }= require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome:'Flash',
  poder:'Speed',
  id:1
}
describe('Suite de manipulação de Herois',()=>{
  it('deve pesquisar um heroi usando arquivos', async ()=>{
    const expected = DEFAULT_ITEM_CADASTRAR
    const [result] = await database.list(expected.id)
    
    deepStrictEqual(result,expected)
  })

  // it('deve cadastrar um heroi, usando arquivos', async ()=>{
  //   const expected = DEFAULT_ITEM_CADASTRAR

  //   ok(null, expected)
  // })
})