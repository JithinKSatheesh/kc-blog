import React from 'react'


import Carousal from './Carousal'


export const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];


export default function Hero(props) {



    const SmallSquare = () => {
        return (
            <div className="w-2 h-2 bg-yellow rotate-45 mx-2"></div>
        )
    }


    return (
        <>
            <div className='bg-black-2'>
                <div className="container mx-auto px-4 pt-20">
                    <div className="py-8 ">

                        <div className="py-5 flex justify-center items-center w-full  relative h-72 overflow-none">
                            <Carousal images={images} />
                        </div>
                    </div>
                    <div className="pb-8">

                        <div className="flex items-center">
                            <div className="flex">
                                {images.map((item, index) => <SmallSquare key={index} />)}
                            </div>
                            <div className="h-1 w-full bg-yellow"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
