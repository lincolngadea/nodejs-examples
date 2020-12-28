const service = require('./service')

async function main(){
  try{
    const resultado = await service.obterPessoas('e')
    const names =[]

    console.time('for')
    for(let i; i <= resultado.results.length -1; i++){
      const pessoas = resultado.results[i]
      names.push(pessoas.name)
    }
    console.timeEnd('for')

    console.time('forin')
    for(let i in resultado.results){
      const pessoas = resultado.results[i]
      names.push(pessoas.name)
    } 
    console.timeEnd('forin')

    console.time('forof')
    for(pessoa of resultado.results){
      names.push(pessoa.name)
    }
    console.timeEnd('forof')


    console.log(names)
    
  }catch(error){
    console.error('Erro interno:',error)
  }
}

main()