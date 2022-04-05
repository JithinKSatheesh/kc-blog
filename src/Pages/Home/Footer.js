import React from 'react'

import { ReactComponent as Icon_rb } from 'assets/icon_rb.svg'
import { ReactComponent as Icon_io } from 'assets/icon_io.svg'
import { ReactComponent as Icon_os } from 'assets/icon_os.svg'
import { ReactComponent as Icon_twitter } from 'assets/icon_twitter.svg'
import { ReactComponent as Icon_insta } from 'assets/icon_insta.svg'

import Title from 'assets/title_2.png'
import Bg from 'assets/bg_footer.png'


export default function Footer(props) {


    return (
        <>
        <div style={{
            background : `url(${Bg})`,
            backgroundSize : '100%',
            backgroundRepeat : 'no-repeat',
            backgroundPosition : 'bottom'
        }}>
            <div className="flex justify-center">

            <div className="text-center w-32">
                <img src={Title} alt="" />
            </div>
            </div>
        </div>

        </>
    )
}


export const FooterIcon = () => {

    return (<div className="flex justify-center">
        <div className='mx-2'>
            <a href=""> <Icon_twitter className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a href=""> <Icon_insta className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a href=""> <Icon_rb className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a href=""> <Icon_io className='w-8' /> </a>
        </div>
        <div className='mx-2'>
            <a href=""> <Icon_os className='w-8' /> </a>
        </div>

    </div>)
}