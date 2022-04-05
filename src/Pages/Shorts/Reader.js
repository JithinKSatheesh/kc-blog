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
    const _shorts = _StoreContent?.state?.shorts|| []
    const _shortsById = _shorts?.find(item => item?.id === parseInt(contentId))

    const nextClick = () => {
        const index = _shorts?.findIndex(item => item?.id === parseInt(contentId))
        const next = _shorts[index + 1]
        console.log(next)
        if (next) {
            navigate(`/shorts/${next?.id}`)
        }
    }
    
    const prevClick = () => {
        const index = _shorts?.findIndex(item => item?.id === parseInt(contentId))
        const next = _shorts[index - 1]
        console.log(index)
        if (next) {
            navigate(`/shorts/${next?.id}`)
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
                heading={_shortsById?.attributes?.title}
                body={_shortsById?.attributes?.content}
                back={`shorts`}
                nextClick={nextClick}
                prevClick={prevClick}
            />
        </>
    )
}
