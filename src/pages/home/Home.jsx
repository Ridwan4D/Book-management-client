import { useEffect, useState } from "react";
import SwiperSlider from "../../components/Swiper";
import axios from "axios";
import BookCategoryCard from "../../components/BookCategoryCard";
import HomeBlog from "../../components/HomeBlog";
import HomeFaq from "../../components/HomeFaq";


const Home = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/allCategories')
        .then(res=>{
            // console.log(res.data);
            setCategories(res.data)
        })
    },[])
    return (
        <div>
            {/* slider */}
            <SwiperSlider/>
            {/* all categories */}
            <div className="my-20 space-y-10">
                <h2 className="text-3xl underline text-center font-bold">All Category of Book</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        categories.map((category,idx) => <BookCategoryCard key={idx} category={category}></BookCategoryCard>)
                    }
                </div>
            </div>
            {/* blog */}
            <HomeBlog/>
            {/* faq section */}
            <HomeFaq/>
        </div>
    );
};

export default Home;