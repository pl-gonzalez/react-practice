import listaImg from '../assets/img/lista.svg'

const Sobre = () => {
  return (
    <div className="flex max-w-[75%] mt-[530px]  p-4 mx-auto justify-center items-center">
        <div className='flex  flex-col flex-1 p-4'>
            <h1 className='max-w-[70%] mx-auto text-3xl text-center font-bold text-slate-700 py-10 '>Vai no mercado e nao tem certeza do que precisa?</h1>
            <p className=' my-4 text-md leading-8 text-slate-700'>Aah, então deixa com a gente!</p>

            <p className=' text-xl leading-8 text-slate-700 text-justify'>Você so precisa dizer para gente o que você gostaria de comer ao longo da semana. Pode ser a mesma refeição durante toda a semana, um prato diferente toda hora, você quem escolhe</p>
            <p className='mt-4 text-xl leading-8 text-justify text-slate-700'>O importante é você ter todos os ingredientes na quantidade que precisar, até porque entedemos bem como é esquecer de comprar algo</p>

            <div className='py-2 px-8 mx-auto mt-10  bg-slate-300 rounded-full'>
              <a href="/">Planejar Semana</a>
            </div>
        </div>

        <div className=' max-w-[500px] w-1/2 py-24 ml-10'>
            <img src={listaImg} alt="checklist" className='-rotate-12'/>
        </div>
    </div>
  )
}

export default Sobre