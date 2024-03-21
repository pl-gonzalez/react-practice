import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="shadow-lg">
        <div className="flex justify-between mx-auto max-w-[80%] p-2">
          <div className=" my-auto">
              <h1 className="text-2xl font-black cursor-pointer text-slate-700"><a href="">Anota <span>Aí!</span></a></h1>
          </div>

          <div className="w-4/12 items-center my-auto ">
            <input className=" flex border rounded-2xl border-slate-500  w-full px-10 mx-auto bg-search-icon bg-no-repeat bg-right bg-origin-content bg-[length:20px_20px] focus:outline-none focus:ring-2 focus:ring-slate-500" type="search" placeholder="Pesquise por receitas ou ingredientes"/>
          </div>

          <div className="my-auto">
              <ul className="flex gap-8 ">
                  <li className="  hover:text-slate-500 cursor-pointer"><Link to='/receitas'>Receitas</Link></li>
                  <li className="  hover:text-slate-500 cursor-pointer"><Link to='/'>Ingredientes</Link></li>
                  <li className="  hover:text-slate-500 cursor-pointer"><Link to='/'>Sobre nós</Link></li>
              </ul>
          </div>
        </div>

    </nav>
  )
}

export default Navbar