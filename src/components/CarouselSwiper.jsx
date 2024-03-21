import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import cookingFood from '../assets/img/feijoada.jpg'


const CarouselSwiper = () => {

    const data = [
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        },
        {
            name: 'Feijoada',
            review: 'Uma das mfeijoadas mais simples e saborosa que você vai comer',
            image: '../assets/img/search-icon.svg'
        }

    ]
  return (
    <div>
        
        <Swiper  
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth:100,
                    modifier: 2.5
                }
            }
            pagination={{el:'.swiper-pagination', clickable: true}}
            navigation={ {
                nextEl:'.swiper-next-btn',
                prevEl:'.swiper-prev-btn',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
            >

                {data.map((d, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white h-[450px] w-[400px] mx-auto text-black rounded-xl ">
                            <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                <img src={cookingFood} alt="Image from data" className="object-fit rounded-t-xl"/>
                            </div>
                    
                            <div className="flex flex-col flex-1 justify-center items-center gap-4 p-4">
                                <p>{d.name}</p>
                                <p>{d.review}</p>
                    
                                <a href="" className='py-2 px-10 mt-10 rounded-full bg-slate-400'>Leia Sobre</a>
                    
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            <div className='slider-controler flex justify-evenly'>
                <div className="swiper-prev-btn slider-arrow ">
                    <button className='p-6 bg-slate-100 rounded-full'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                </div>
                <div className="swiper-next-btn slider-arrow ">
                    <button className='p-6 ml-[520px] bg-slate-100 rounded-full' >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                

                {/* <div className="swiper-pagination "></div> */}
            </div>
        </Swiper>
    </div>
  )
}

export default CarouselSwiper