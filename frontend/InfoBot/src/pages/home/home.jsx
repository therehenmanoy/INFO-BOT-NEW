import bgImage from "../../assets/chatbg.png";
import chat1 from "../../assets/chat1.png";
import chat2 from "../../assets/chat2.png";
import chat3 from "../../assets/chat3.png";
import { Carousel } from 'flowbite-react';

const HomePage = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Carousel Container */}
            <div className="relative flex justify-center items-center h-full">
                <div className="w-[300px] h-[200px]">
                    <Carousel>
                        <img src={chat1} alt="Slide 1" />
                        <img src={chat2} alt="Slide 2" />
                        <img src={chat3} alt="Slide 3" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
