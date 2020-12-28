const service = require('./service')

Array.prototype.meuFilter = function(callback){
  const lista = []
  for (index in this){
    const item = this[index]
    const result = callback(item,index,this)

    if(!result) continue;
    lista.push(item)
  }
  return lista
}


async function main(){
  try {
    const {results} = await service.obterPessoas(`a`)

    const familiarLars = results.meuFilter((pessoa,index,lista)=>{
      console.log(`Índice:[${index}]`,lista.length)
      return pessoa.name.toLowerCase().indexOf('lars') !== -1
    })
   
    const pessoas = familiarLars.map(pessoa=>pessoa.name)

    console.log(pessoas)

  } catch (error) {
    console.error('Erro interno:', error)
  }
}

// async function main(){
//   try {
//     const { results } = await service.obterPessoas(`a`)
       
//     const familiarLars = results.filter((item)=>{
//       return result = item.name.toLowerCase().indexOf('lars') !== -1
//     })

//     const names = familiarLars.map(pessoa=>pessoa.name)

//     console.log(names)
    
//   } catch (error) {
//     console.error('Erro interno:', error)
//   }
// }

main()