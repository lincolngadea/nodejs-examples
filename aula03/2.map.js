const service = require('./service')

Array.prototype.meuMap = function(callback){
  const novoArrayMapeado =[]
  for(let i = 1;i <= this.length - 1; i++){
    const mapa = callback(this[i],i)
    novoArrayMapeado.push(mapa)
  }
  return novoArrayMapeado
}

async function main(){
  try{

    const resultado = await service.obterPessoas('e')

    // console.time('map')
    const names = resultado.results.meuMap((pessoa,index) => {
      return `[${index}]${pessoa.name}`
    })
    // console.timeEnd('map')
    console.log(names)

  }catch(error){
    console.error('Erro interno:', error)
  }  
}
main()