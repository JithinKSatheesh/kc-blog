import React, { useState, useEffect } from 'react'
import { wrap } from "popmotion";


import Carousal from './Carousal'

// export const images = [
//     "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
//     "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
//     "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
// ];


export default function Hero(props) {

    const { configs } = props

    // console.log(configs)

    const [[page, direction], setPage] = useState([0, 0]);

    const images = [
       { image : configs?.carousal_image_1,
            link : configs?.carousal_image_1_link
        },
       { image : configs?.carousal_image_2,
            link : configs?.carousal_image_2_link
        },
       { image : configs?.carousal_image_3,
            link : configs?.carousal_image_3_link
        },
    ]

    const imageIndex = wrap(0, images.length, page);


    const SmallSquare = ({ active }) => {
        return (
            <div className={`w-2 h-2  rotate-45 mx-2 ${active ? 'bg-white' : 'bg-yellow'}`}></div>
        )
    }


    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const style = {
        bg: {
            backgroundImage: `url(${images[imageIndex]})`,
            backgroundSize: 'cover',
            backdropFilter: 'blur(16px)',

        }
    }

    return (
        <>
            <div className='bg-black-2 '>
                <div
                    style={isMobile ? {} : {...style.bg}}
                    className='  '>
                    <div className={`${!isMobile ? 'bg-black/40 backdrop-blur-xl' : ''}`}>

                        <div className="container mx-auto px-4 pt-20  ">
                            <div className="py-8 ">

                                <div className="py-5  flex justify-center items-center w-full  relative h-72 overflow-none ">
                                    <Carousal
                                        images={images}
                                        page={page}
                                        direction={direction}
                                        setPage={setPage}
                                        imageIndex={imageIndex}
                                    />
                                </div>
                            </div>
                            <div className="pb-8">

                                <div className="flex items-center w-full lg:max-w-lg mx-auto">
                                    {/* {(page)%3} */}
                                    <div className="flex">
                                        {images.map((item, index) => <SmallSquare key={index} active={((index + 1) === ((page) % images.length) + 1)} />)}
                                    </div>
                                    <div className="h-1 w-full bg-yellow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
