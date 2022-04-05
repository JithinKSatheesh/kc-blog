import React from 'react'

import  Poem  from 'assets/btn_poem.svg'
import  Worlds  from 'assets/btn_worlds.svg'
import  Novels  from 'assets/btn_novels.svg'
import  Shorts  from 'assets/btn_shorts.svg'
import  GlobeIcon  from 'assets/globe_icon.svg'
import { Link } from 'react-router-dom'


export default function Contents(props) {
    

    return (
        <>
        <div className="py-16 bg-black-2">
            <div className="grid grid-cols-2 max-w-sm mx-auto">
                    <div> <Link to="/poems"> <img src={Poem} alt="" /> </Link></div>
                    <div> <Link to="/worlds"> <img src={Worlds} alt="" /></Link> </div>
                    <div> <Link to="/novels"> <img src={Novels} alt="" /> </Link></div>
                    <div> <Link to="/shorts"> <img src={Shorts} alt="" /></Link> </div>
            </div>
            <div className="mt-16 max-w-xl mx-auto">
                <img src={GlobeIcon} alt="" />
            </div>

        </div>
            
        </>
    )
}
