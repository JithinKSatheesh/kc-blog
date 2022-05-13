import React from 'react'

import { ReactComponent as Icon_rb } from 'assets/icon_rb.svg'
import { ReactComponent as Icon_io } from 'assets/icon_io.svg'
import { ReactComponent as Icon_os } from 'assets/icon_os.svg'
import { ReactComponent as Icon_twitter } from 'assets/icon_twitter.svg'
import { ReactComponent as Icon_insta } from 'assets/icon_insta.svg'

import Title from 'assets/title_3.svg'
import Bg from 'assets/bg_footer.png'

import { Store as StoreContent } from 'Store/contentStore'


export default function Footer(props) {

    const {configs} = props

    return (
        <>
            <div style={{
                background: `url(${Bg})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
            }}>
                <div className="flex justify-center">

                    <div className="text-center w-32">
                        {/* <img src={Title} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className="py-6 bg-black-2">
                    <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                        <div className='text-center  mx-auto lg:ml-0'>
                            <img src={Title} className="w-56 mx-auto" alt="" />
                        </div>
                        <div className='w-full lg:w-fit pt-12 lg:pt-0'>
                            <FooterIcon configs={configs} className="text-yellow" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export const FooterIcon = (props) => {

    const { configs, className } = props

    return (<div className={`flex justify-center ${className}`}>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.twitter_link} className="cursor-pointer" >
                <Icon_twitter className='w-8' />
            </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.insta_link} > <Icon_insta className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.link_1} > <Icon_rb className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.patreon_link} > <Icon_io className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.link_1} > <Icon_os className='w-8' /> </a>
        </div>

    </div>)
}