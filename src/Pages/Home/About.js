import React from 'react'
import Footer, {FooterIcon} from './Footer'


import Bg from 'assets/bg_home_1.png'

export default function About(props) {


    return (
        <>
            <div className='bg-black-2'>
                <div style={{
                    background: `url(${Bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center'


                }}>

                    <div className="container mx-auto pt-32 pb-8 px-9">
                        <div className="text-center text-xl xl:text-4xl text-white heading  uppercase leading-16">
                            About  <br />
                            Hand Written chronicles
                        </div>
                        <div className=' text-center text-sm pt-12 pb-8 text-white'>
                            <p>

                                Every child has a dream, which he holds onto firmly in the palm of his arms. A dream, like a ball of light which guides, opening doors and spreading hope. For a young boy who grew up in a small town in some corner of the world, he also had such a dream. For him, his imagination was his companion for long. He’d write stories and draw up sketches almost everywhere that he could get his hands on. In his mind, in its domain he was rampant and free. He could fly amongst the mighty dragons that breathed, swim with the birds that lived deep underwater and gorge on golden grapes which resembled dawn's first light. For him, this was his state of ecstasy.
                                <br /><br />
                                Eventually like tides receding, time took away a lot of himself, threw him into storms that raged on and ravaged his life, he had forgotten his dreams, he forgot about the light and he closed his eyes and only darkness remained. Lost in a stasis, he wished to break free from the gears of time. And thus, one day came forth the ball of light, the one which guided him in his world of thoughts and fairy tales. Memories flashed past in his head as he picked up a pen, he picked up a pencil, he started to scribe, he started to prance, he started jumping up and down in joy for he had found his old life. Yes, this is my tale. For a long time I had to cave in and be lost and one day, find myself again. This is my journey through my mind's domain and I am the narrator who will bring forth tales from worlds unknown.

                            </p>
                        </div>
                        <div className="h-1 w-full bg-yellow"></div>
                        <FooterIcon />
                        <div className="h-1 w-full bg-yellow"></div>

                    </div>
                    <Footer />

                </div>
            </div>

        </>
    )
}
