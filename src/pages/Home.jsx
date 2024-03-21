import Hero from '../components/Hero'
import ReceitasPopulares from '../components/ReceitasPopulares'
import Sobre from '../components/Sobre'


const Home = () => {
  return (
    <>
        <section className="hero">
          <Hero />

        </section>

        <section className="receitas-populares ">
          <ReceitasPopulares />
        </section>

        <section className="sobre">
          <Sobre />
        </section>
        

        
    </>
  )
}

export default Home