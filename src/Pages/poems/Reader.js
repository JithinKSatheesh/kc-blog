import React, {useEffect, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Readerlayout from 'Layout/ReaderLayout'
import Navbar from 'Pages/Nav'

// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'

// ------------------------------------
import { Store as StoreContent } from 'Store/contentStore'

export default function Reader(props) {
    
    const { ScrollToTop } = useScrollBehaviours()

    const {  contentId } = useParams()
    const navigate = useNavigate()

    const _StoreContent  = useContext(StoreContent)
    const _poems= _StoreContent?.state?.poems|| []
    const _poemById = _poems?.find(item => item?.id === parseInt(contentId))

    const nextClick = () => {
        const index = _poems?.findIndex(item => item?.id === parseInt(contentId))
        const next = _poems[index + 1]
        console.log(next)
        if (next) {
            navigate(`/poems/${next?.id}`)
        }
    }
    
    const prevClick = () => {
        const index = _poems?.findIndex(item => item?.id === parseInt(contentId))
        const next = _poems[index - 1]
        console.log(index)
        if (next) {
            navigate(`/poems/${next?.id}`)
        }
    }


    useEffect(() => {
        ScrollToTop()
    }, [])

    // console.log(_poems)
    

    return (
        <>
            <Navbar />
            <Readerlayout
                heading={_poemById?.attributes?.title}
                body={_poemById?.attributes?.content}
                back={`poems`}
                prevClick={prevClick}
                nextClick={nextClick}
            />
        </>
    )
}
