import React, {useEffect, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Readerlayout from 'Layout/ReaderLayout'
import Navbar from 'Pages/Nav'


// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'


// ------------------------------------
import { Store as StoreContent } from 'Store/contentStore'

export default function Reader(props) {
    
    const {  contentId } = useParams()
    const navigate = useNavigate()

    const _StoreContent  = useContext(StoreContent)
    const _worlds = _StoreContent?.state?.worlds|| []
    const _worldById = _worlds?.find(item => item?.id === parseInt(contentId))

    const nextClick = () => {
        const index = _worlds?.findIndex(item => item?.id === parseInt(contentId))
        const next = _worlds[index + 1]
        console.log(next)
        if (next) {
            navigate(`/worlds/${next?.id}`)
        }
    }
    
    const prevClick = () => {
        const index = _worlds?.findIndex(item => item?.id === parseInt(contentId))
        const next = _worlds[index - 1]
        console.log(index)
        if (next) {
            navigate(`/worlds/${next?.id}`)
        }
    }

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()
    }, [])
    

    return (
        <>
            <Navbar />
            <Readerlayout
                heading={_worldById?.attributes?.title}
                body={_worldById?.attributes?.content}
                back={`worlds`}
                nextClick={nextClick}
                prevClick={prevClick}
            />
        </>
    )
}
