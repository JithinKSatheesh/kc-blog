import React from 'react'

import Nav from 'Pages/Nav'
import Hero from './Hero'
import Contents from './Contents'
import About from './About'


export default function Home(props) {

    return (
        <>
        <Nav/>
        <Hero />
        <Contents />
        <About />
        
        </>
    )
}
