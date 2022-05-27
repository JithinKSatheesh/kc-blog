import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Burger } from 'assets/burger.svg'
import { ReactComponent as Title } from 'assets/title.svg'
import { ReactComponent as Close } from 'assets/icon_close.svg'

import { FooterIcon } from 'Pages/Home/Footer'

import { Store as StoreContent } from 'Store/contentStore'

const _links = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "Worlds",
        to: "/worlds"
    },
    {
        label: "Novels",
        to: "/novels"
    },
    {
        label: "Shorts",
        to: "/shorts"
    },
    {
        label: "Poems",
        to: "/poems"
    },
    // {
    //     label : "Shop",
    //     to : "/shop"
    // },
]

export default function Index(props) {


    const [open, setOpen] = useState(false)


    return (
        <>
            <div className=" bg-yellow w-full shadow p-3 fixed z-40">
                <div className='flex justify-between'>
                    <div>
                        <div className="xl:hidden">
                            <Burger width={"20px"} onClick={() => setOpen(true)} className="cursor-pointer" />
                        </div>
                    </div>
                    <div> <Link to="/">  <Title className='w-56' /> </Link> </div>
                    <div></div>
                </div>
                <div className="hidden xl:block">
                    <NavMenuWeb />
                </div>
            </div>
            <div className="hidden xl:block xl:py-4"></div>
            <NavMenu open={open} setOpen={setOpen} />

        </>
    )
}

const NavMenuWeb = (props) => {

    const _StoreContent = useContext(StoreContent)
    const _config = _StoreContent?.state?.configs || {}

    console.log(_config, "PPPP")

    return (
        <div className="py-2 flex justify-center items-center text-xs">
            {
                _links.map(item =>
                    <div key={item?.label} className="text-black font-bold px-4">
                        <Link to={item?.to}> {item?.label}</Link>
                    </div>)
            }
            <div className="text-black font-bold px-4">
                <a href={_config?.attributes?.link_1} target="_blank" > Shop</a>
            </div>
        </div>
    )
}

const NavMenu = (props) => {

    const { open = false, setOpen } = props

    const _StoreContent = useContext(StoreContent)
    const _config = _StoreContent?.state?.configs || {}

    console.log(_config, "##")


    return (
        <div className={`fixed top-0 left-full h-screen w-full bg-yellow-dark z-40 transition-transform ${open ? '-translate-x-full' : 'translate-x-0'}`}>
            <div className="px-4">
                <div className="py-4 cursor-pointer">
                    <Close width={"20px"} height="20px" onClick={() => setOpen(false)} />
                </div>
                <div className="h-1 bg-yellow w-full"></div>
                <div className="py-12">
                    {
                        _links.map(item =>
                            <div key={item?.label} className="text-center heading text-3xl font-bold pb-8">
                                <Link to={item?.to}> {item?.label}</Link>
                            </div>)
                    }
                    <div className="text-center heading text-3xl font-bold pb-8">
                        <a href={_config?.attributes?.link_1} target="_blank" > Shop</a>
                    </div>
                </div>
                <div className="h-1 bg-yellow w-full"></div>
                <FooterIcon configs={_config?.attributes} />

            </div>

        </div>
    )
}