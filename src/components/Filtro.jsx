
const Filtro = () => {
  return (
    <div className="flex w-full  ">
        <div className="flex justify-evenly w-[50%] pt-6 pb-2 my-auto gap-10">
            <button className="py-2 px-4 rounded-full  border-none outline outline-1 outline-slate-700 hover:bg-slate-700 hover:text-slate-300">Todas</button>
            <button className="py-2 px-4 rounded-full  border-none outline outline-1 outline-slate-600 hover:bg-slate-700 hover:text-slate-300">Salgadas</button>
            <button className="py-2 px-4 rounded-full  border-none outline outline-1 outline-slate-700 hover:bg-slate-700 hover:text-slate-300">Doces</button>
        </div>
    </div>
  )
}

export default Filtro