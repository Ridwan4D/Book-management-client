import { useContext, useEffect } from "react";
import SwiperSlider from "../../components/Swiper";
import axios from "axios";
import BookCategoryCard from "../../components/BookCategoryCard";
import HomeBlog from "../../components/HomeBlog";
import HomeFaq from "../../components/HomeFaq";
import { AuthContext } from "../../providers/AuthProvider";


const Home = () => {
    const {categories,setCategories} = useContext(AuthContext)
    useEffect(()=>{
        axios.get('https://rt-library-management-server.vercel.app/allCategories')
        .then(res=>{
            // console.log(res.data);
            setCategories(res.data)
        })
    },[setCategories])
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