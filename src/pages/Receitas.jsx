import CardGrid from "../components/CardGrid"

import Lista from "../components/Lista"

const Receitas = () => {
  return (

      <div className=" w-full bg-slate-300">
        <div className="flex flex-col justify-center mx-auto py-8 text-center bg-slate-100">
          <h1 className="text-2xl font-bold text-slate-700">Receitas</h1>
          <p className="text-lg text-slate-700">Nossas receitas mais saborosas e praticas. <br /> Sem passos complexos ou tecnicas avançadas</p>
        </div>
        
        <div className="flex justify-center">
          
          <div className="">
            <CardGrid />
            
          </div>
          <div>
            <Lista />
          </div>
        </div>
      </div>
    
  )
}

export default Receitas