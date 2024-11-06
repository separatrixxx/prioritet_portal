import { SliderProps } from './Slider.props';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Slide } from '../Slide/Slide';


export const Slider = ({ name, images }: SliderProps): JSX.Element => {
    return (
        <Swiper className={styles.slider}
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}>
            {images.map((img, i) => (
                <SwiperSlide key={img + i}>
                    <Slide image={img} alt={name + ' image ' + i} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};