import React from 'react'
import Footer, { FooterIcon } from './Footer'

import MarkdownView from 'react-showdown';

import Bg from 'assets/bg_home_1.png'

export default function About(props) {

    const { configs } = props

    return (
        <>
            <div className='bg-black-2'>
                <div style={{
                    background: `url(${Bg})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center'


                }}>

                    <div className="container mx-auto pt-44 lg:pt-72 2xl:pt-96 pb-8 px-9">
                        <div className="  font-bold text-center text-xl xl:text-2xl text-white heading  uppercase leading-16">
                            About  <br />
                            Hand Written chronicles
                        </div>
                        <div className=' text-center text-sm pt-12 pb-8 text-white text-light'>
                            <p>
                                <MarkdownView markdown={configs?.about_author} />
                            </p>
                        </div>
                        <div className="text-center font-bold text-xl xl:text-2xl text-white heading  uppercase leading-16">
                            About the
                            Narrator
                        </div>
                        <div className=' text-center text-sm pt-12 pb-8 text-white'>
                            <p>
                                <MarkdownView markdown={configs?.about_website} />
                            </p>
                        </div>
                        <div className="h-1 w-full bg-yellow"></div>
                            <FooterIcons configs={configs} className="text-grey" />
                        <div className="h-1 w-full bg-yellow"></div>

                    </div>
                    <Footer configs={configs} />

                </div>
            </div>

        </>
    )
}

const FooterIcons = (props) => {

    const { configs } = props

    return (<div className='flex justify-center py-5'>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.mail_link} > 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#404041" className='w-' width="32" height="32" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
            </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.linkedin_link} > 
                <svg xmlns="http://www.w3.org/2000/svg" fill="#404041" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
            </a>
        </div>
        <div className='mx-2'>
            <a target={"_blank"} href={configs?.twitter_link} > 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#404041" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
            </a>
        </div>
    </div>)
}