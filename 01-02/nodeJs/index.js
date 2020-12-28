
function obterUsuario(){

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // return reject(new Error("ERRÃO"))
      return resolve({
        id: 1,
        nome: "Lincoln Gadea",
        email: "lincoln@glinc.com.br"
      })
    }, 1000)
  })  
}

function obterTelefone(idUsuario){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      return resolve({
        telefone: "991010147",
        ddd: "75"
      })
    }, 2000)    
  })
}

function obterEndereco(idUsuario){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      return resolve({
        endereco: "rua das mandiocas digitais..."
      },3000)
    })
  })
}

main()

async function main(){
  try{
    console.time("PromiseTime")
    const usuario  = await obterUsuario();
    const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEndereco(usuario.id);

    console.log(`
      Nome do usuário: ${usuario.nome}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereço: ${endereco.endereco}
    `)
    console.timeEnd("PromiseTime")

  }catch(error){
    console.error("Bugou tudo...",error)
  }
}