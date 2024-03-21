import Filtro from "../components/Filtro"

const d = 
  {
      name: 'Feijoada',
      review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
      image: '../assets/img/feijoada.jpg'
  }

const CardGrid = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="flex justify-center w-1/2 ml-24 ">
        <Filtro />
      </div>

      <div className="">

        <div className="flex w-4/5 min-h-min gap-4 bg-slate-100">

          <div className="bg-white h-[250px] w-[300px] mx-auto text-black rounded-xl ">
              <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.image} alt="Image from data" className="object-fit rounded-t-xl"/>
              </div>

              <div className="flex flex-col flex-1 justify-center items-center gap-4 p-4">
                  <p>{d.name}</p>
                  <p>{d.review}</p>

                  <a href="" className='py-2 px-10 mt-10 rounded-full bg-slate-400'>Leia Sobre</a>

            </div>
          </div>

          <div className="bg-white h-[250px] w-[300px] mx-auto text-black rounded-xl ">
              <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.image} alt="Image from data" className="object-fit rounded-t-xl"/>
              </div>

              <div className="flex flex-col flex-1 justify-center items-center gap-4 p-4">
                  <p>{d.name}</p>
                  <p>{d.review}</p>

                  <a href="" className='py-2 px-10 mt-10 rounded-full bg-slate-400'>Leia Sobre</a>

            </div>
          </div>

          <div className="bg-white h-[250px] w-[300px] mx-auto text-black rounded-xl ">
              <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.image} alt="Image from data" className="object-fit rounded-t-xl"/>
              </div>

              <div className="flex flex-col flex-1 justify-center items-center gap-4 p-4">
                  <p>{d.name}</p>
                  <p>{d.review}</p>

                  <a href="" className='py-2 px-10 mt-10 rounded-full bg-slate-400'>Leia Sobre</a>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardGrid