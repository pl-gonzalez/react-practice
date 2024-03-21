import cookingFood from '../assets/img/cooking-food.svg'

import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="flex  max-w-screen-xl m-auto my-auto relative">
        
        <div className='w-[700px]'>
            <img 
            src={cookingFood} 
            alt="cooking food"
            className='absolute -left-1/4 w-3/4 ml-32'
            
            />
        </div>

        <div className='flex flex-col p-8 z-10 mt-20'>
            <div className='gap-3'>
                <h1 className='font-bold text-6xl p-8 text-slate-700'>Lembrou da lista do mercado?</h1>
                <p className='text-xl mt-10 p-4 leading-8 text-slate-700'>Ja fez sua lista de compras para nao esquecer nada? <br />
                    Seja para comprar o que precisa para fazer aquela receita, ou uma compra cotidiana, nos te ajudamos a montar sua lista!</p>
            </div>
            <div className='mt-20 flex gap-20 mx-auto'>
                <Link to='/receitas' className='bg-slate-600 text-white py-2 px-8 rounded-full font-semibold text-lg'>Fazer Lista</Link>
                <button className='bg-slate-200 text-slate-500 py-2 px-8 rounded-full font-semibold text-md'>Como funciona?</button>
            </div>
        </div>

    </div>
  )
}

export default Hero