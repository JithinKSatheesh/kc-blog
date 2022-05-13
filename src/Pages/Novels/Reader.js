import React, {useEffect, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Readerlayout from 'Layout/ReaderLayout'
import Navbar from 'Pages/Nav'

// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'

// ------------------------------------
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');

export default function Reader(props) {
    
    const { chapterId, contentId } = useParams()
    const navigate = useNavigate()

    const _StoreContent  = useContext(StoreContent)
    const _novels = _StoreContent?.state?.novels || []

    const _novelById = _novels?.find(item => item?.id === parseInt(chapterId))
    const _chapters = _novelById?.novel_chapters || []

    const _content = _chapters?.find(item => item?.id === parseInt(contentId)) || {}

    
    const nextClick = () => {
        const index = _chapters?.findIndex(item => item?.id === parseInt(contentId))
        const next = _chapters[index + 1]
        console.log(next)
        if (next) {
            navigate(`/novels/${chapterId}/${next?.id}`)
        }
    }
    
    const prevClick = () => {
        const index = _chapters?.findIndex(item => item?.id === parseInt(contentId))
        const next = _chapters[index - 1]
        console.log(index)
        if (next) {
            navigate(`/novels/${chapterId}/${next?.id}`)
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
                showNav={true}
                heading={_content?.title}
                body={_content?.body}
                back={`novels/${chapterId}`}
                nextClick={nextClick}
                prevClick={prevClick}
            />
        </>
    )
}
