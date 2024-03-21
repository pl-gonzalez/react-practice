// import Carousel from "./Carousel"
import CarouselSwiper from "./CarouselSwiper"
const ReceitasPopulares = () => {
  return (
    <div className="flex flex-col max-h-52 mx-auto mt-28 bg-slate-300">
        <div className="mx-auto ">
            <h2 className="text-3xl font-bold text-slate-700 pt-10">Receitas Populares</h2>
            <p className=" mt-8 text-xl leading-8 text-slate-700">Os pratos que todos adoram, díficil você nao ter uma favorita entre essas:</p>
        </div>

        <div className="p-10 bg-slate-300">
            <CarouselSwiper />
        </div>
    </div>
  )
}

export default ReceitasPopulares
