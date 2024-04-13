import { Container } from "./style"
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from "../Card/Index"

function Slider({ info, title }) {
    return (
        <Container> 
            <h1>{title}</h1>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                       <Card item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider