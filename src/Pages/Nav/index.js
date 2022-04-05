import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Burger } from 'assets/burger.svg'
import { ReactComponent as Title } from 'assets/title.svg'
import { ReactComponent as Close } from 'assets/icon_close.svg'

import { FooterIcon } from 'Pages/Home/Footer'

export default function Index(props) {

    const [open, setOpen] = useState(false)
    

    return (
        <>
        <div className="flex justify-between bg-yellow w-full p-3 fixed z-40">
            <div> <Burger width={"20px"}  onClick={() => setOpen(true)} className="cursor-pointer" /> </div>
            <div> <Link to="/">  <Title className='w-56' /> </Link> </div>
            <div></div>
        </div>
        <NavMenu open={open} setOpen={setOpen} />
            
        </>
    )
}


const NavMenu = (props) => {

    const {open = false, setOpen} = props

    return (
        <div className={`fixed top-0 left-full h-screen w-full bg-yellow-dark z-40 transition-transform ${open ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="px-4">
                <div className="py-4">
                    <Close width={"30px"} height="30px" onClick={() => setOpen(false)} />
                </div>
                <div className="h-1 bg-yellow w-full"></div>
                <div className="py-12">
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/"> Home</Link>
                    </div>
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/worlds"> Worlds</Link>
                    </div>
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/novels"> Novels</Link>
                    </div>
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/shorts"> Shorts</Link>
                    </div>
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/poems"> Poems</Link>
                    </div>
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <Link to="/shop"> Shop</Link>
                    </div>
                </div>
                <div className="h-1 bg-yellow w-full"></div>
                <FooterIcon />

            </div>
                
        </div>
    )
}