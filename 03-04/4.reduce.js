const {obterPessoas} = require('./service')

async function main(){
  // console.time('time:')
  const { results } = await obterPessoas(`a`)
  
  const somaPesos = results.map(pessoa=> parseInt(pessoa.height))

  const total = somaPesos.reduce((ant,prox)=>ant+prox)

  console.log(total)
}
main()