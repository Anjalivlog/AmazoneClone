import { useEffect } from 'react';
import Products from './Products';
import { ToastContainer } from 'react-toastify';
import '../style/Home.css'

const Home = () => {

    useEffect(() => Slider(0), []) 

    return (
        <>
            <div className="home">
                <div className="homeContainer">

                {/*  */}
                <div className='HomeToastContainer'>
                    <ToastContainer/>
                </div>

                    <div className='homeSliderContainer'>
                        <div className='homeSlide'>
                            <img className='homeImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg' alt='' />
                        </div>

                        <div className='homeSlide'>
                            <img className='homeImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg' alt='' />
                        </div>

                        <div className='homeSlide'>
                            <img className='homeImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/Unrec/BOB_OneCard/Sports/Sports_3000._CB597092578_.jpg' alt='' />
                        </div>

                        <div className='homeSlide'>
                            <img className='homeImg' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Aug_23/Unrec/BOB_OneCard/Lugg/3000_lugg._CB597092431_.jpg' alt='' />
                        </div>
                    </div>

                    {/* HOME ROW */}
                    <div className='HomeRow'>
                    <Products 
                          id = {12323}
                          title='Fitbit Watch' 
                          price={1000}
                          rating={4.5}
                          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    />
                    <Products 
                          id = {12324}
                          title='New Apple iPad Pro' 
                          price={1200}
                          ratng={5}
                          image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                    />
                    <Products 
                          id = {12325}
                          title='The Lean Startup' 
                          price={900}
                          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SX400_.jpg'
                    />
                    <Products 
                          id = {12326}
                          title='Apple AirPods Pro' 
                          price={1300}
                          image='https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UL320_.jpg'
                    />
                        
                        
                    </div>
                    
                    {/* Second Row */}
                    <div className='HomeRow'>
                    <Products 
                          id = {12327}
                          title='Smart Fire Tv' 
                          price={1000}
                          image='https://m.media-amazon.com/images/I/815h+HlZe7L._AC_UY218_.jpg'
                    />
                    <Products 
                          id = {12328}
                          title='Amazon Echo(3rd generation)' 
                          price={2000}
                          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                    />
                                          
                        
                    </div>

                    {/* Third Row */}
                    <div className='HomeRow'>
                    <Products 
                          id = {12329}
                          title='Home Glass Storage Jar' 
                          price={500}
                          image='https://m.media-amazon.com/images/I/71w3z+rqNUL._AC_UL400_.jpg'
                    />
                    <Products 
                          id = {12330}
                          title='33-Pcs Kitchen Utensils Set' 
                          price={800}
                          image='https://m.media-amazon.com/images/I/713P8jdA73L._AC_UL400_.jpg'
                    />
                    <Products 
                          id = {12331}
                          title='Cotton Ultra Soft Towel' 
                          price={900}
                          image='https://m.media-amazon.com/images/I/91pvfFcckmL._AC_UL400_.jpg'
                    />
                    <Products 
                          id = {12332}
                          title='Broom' 
                          price={1000}
                          image='https://m.media-amazon.com/images/I/61gNTvmCVJL._AC_UL400_.jpg'
                    />
                        
                        
                    </div>

                    {/* Fourth Row */}
                    <div className='HomeRow'>
                    <Products 
                          id = {12333}
                          title='Mouth Guard' 
                          price={1100}
                          image='https://m.media-amazon.com/images/I/71bhsFse2mL._AC_UL400_.jpg'
                    />
                    <Products 
                          id = {12334}
                          title='Dove Body Wash' 
                          price={1300}
                          image='https://m.media-amazon.com/images/I/71lPw5gA3-L._AC_UL400_.jpg'
                    />
                    <Products 
                          id = {12335}
                          title='39 Pcs Aesthetic School Items' 
                          price={1000}
                          image='https://m.media-amazon.com/images/I/71f3K1OxaPL._AC_UL400_.jpg'
                    />
                                           
                        
                    </div>
                </div>
            </div>
        </>
    );
}

function Slider(Counter) {
    const Slides = document.querySelectorAll(".homeImg");
    Slides.forEach((slide,index) => {
        if (index !== Counter) {
            slide.style.visibility = `hidden`;
            slide.classList.add(`image-${index}`);
        }
    });
    moveCarousal(Counter, Slides, Slides.length);
}

function moveCarousal(Counter, Slides, len) {
    if (Slides) {
        if (Counter >= len - 1) Counter = 0;
        else Counter +=1;
        Slides.forEach((slide, index) => {
            if (index === Counter) {
                slide.style.visibility = `visible`;
            } else {
                slide.style.visibility = `hidden`;
            }
        });
    }
    setTimeout(() => {
        moveCarousal(Counter, Slides, len)
    },4000);

}

export default Home