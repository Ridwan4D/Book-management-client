// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slid from './Slid';

const SwiperSlider = () => {
  const africanDescription = "Explore the rich tapestry of Africa's past in this comprehensive history book, tracing the continent's journey from ancient civilizations to modern nations. Delve into the fascinating stories of kingdoms, empires, and cultures that shaped Africa's diverse landscapes. From the glory of ancient Egypt to the impact of colonialism and struggles for independence, this book offers a vivid portrayal of Africa's complexities and contributions to world history."
  const fictionDescription = "Embark on a thrilling journey through the boundless realms of imagination with this captivating science fiction book. Set in a future where technology, aliens, and distant worlds collide, this gripping tale pushes the boundaries of human potential and explores the intricate interplay between humanity and the cosmos. Brace yourself for mind-bending adventures, innovative ideas, and thought-provoking insights into the possibilities that lie beyond the stars."
  const biographiesDescription = "Dive into the vibrant tapestry of humanity with these captivating ethnic and cultural biographies. Each book offers a unique lens into the lives of individuals from diverse backgrounds, spanning continents and centuries. Discover the triumphs, struggles, and rich traditions that have shaped communities around the world. From iconic figures to unsung heroes, these biographies illuminate the beauty and resilience of human diversity, inviting readers to celebrate the kaleidoscope of cultures that define our global heritage"
  return ( 
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slid heading={"African History Books"} description={africanDescription} img={"https://i.ibb.co/2Z8QR3K/32323800.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <Slid heading={"Science Fiction Books"} description={fictionDescription} img={"https://i.ibb.co/ws5sWyz/Last-Watch.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <Slid heading={"Ethnic & Cultural Biographies"} description={biographiesDescription} img={"https://i.ibb.co/7J9nRP1/nau365.webp"}/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default SwiperSlider;