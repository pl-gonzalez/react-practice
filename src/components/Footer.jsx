import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className=' w-full p-8 bg-slate-900'>
        <div className='w-[80%] flex mx-auto m-8'>
            <div className='w-full text-slate-300'>
                {/* <h1 className="text-xl font-black cursor-pointer text-slate-700"><a href="">Anota <span>Aí!</span></a></h1> */}
                <div className='w-4/5 mx-auto p-4 text-base font-light text-justify'>
                    <p className='mb-4'>Anota Ai! oferece aos usuarios uma completa lista de compras de supermercado, garantindo que não voce nao esquecerá de comprar o que precisa.</p>
                    <p>Nos acompanhe nas redes socias, falamos sobre alimentação e nutrição toda semana.</p>
                </div>
            
                <div className='flex mx-auto gap-10 w-44 fa-2x m-6 '>
                    <a href="">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faInstagram} className='' />
                    </a>
                </div>
            </div>
                <div className='flex w-full justify-between text-slate-300'>
                    <div>
                        <h2 className='mb-4 text-lg font-semibold text-slate-200 underline underline-offset-4'>Receitas</h2>
                        <ul className='pl-4 text-slate-300 font-light'>
                            <li><a href="/">Doces</a></li>
                            <li><a href="/">Salgadas</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-4 text-lg font-semibold text-slate-100 underline underline-offset-4'>Alimentos</h2>
                        <div className='flex  gap-10'>
                            <ul className='pl-4 text-slate-300 font-light'>
                                <li><a href="/">Verduras</a></li>
                                <li><a href="/">Legumes</a></li>
                                <li><a href="/">Carnes</a></li>
                                <li><a href="/">Peixes</a></li>
                            </ul>
                            <ul className='pl-4 text-slate-300 font-light'>
                                <li><a href="">Grãos</a></li>
                                <li><a href="">Cereais</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className='mb-4 text-lg font-semibold text-slate-100 underline underline-offset-4'>Receitas</h2>
                        <ul className='pl-4 text-slate-300 font-light'>
                            <li><a href="/">Doces</a></li>
                            <li><a href="/">Salgadas</a></li>
                        </ul>
                </div>
            </div>
        </div>

            <div className=' flex w-full px-8 justify-between text-slate-300 '>
                <h1 className="text-2xl font-black cursor-pointer text-slate-300"><a href="">Anota <span>Aí!</span></a></h1>

                <p className='text-sm my-auto'>@Desenvolvido como pratica de estudos.</p>
            </div>


    </div>

  )
}

export default Footer