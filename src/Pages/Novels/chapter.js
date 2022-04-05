import React, {useContext} from 'react'

import Photo from 'assets/photo/photo.png'
import { Link, useParams } from 'react-router-dom'
import { ChapterLayout } from 'Layout/ChapterLayout'

import Navbar from 'Pages/Nav'

// ------------------------------------
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');

export default function Header(props) {

    const { chapterId } = useParams()

    // console.log(useParams())

    const _StoreContent  = useContext(StoreContent)
    const _novels = _StoreContent?.state?.novels || []

    const _novelById = _novels.find(item => item?.id === parseInt(chapterId)) || {}
    const _chapters = _novelById?.novel_chapters || []

    const _image = _novelById?.img ? _novelById?.img : Photo


    const data = [
        {
            id: 1,
            number : '0001',
            title: "Against The Rot",
            
        },
        {
            id: 2,
            number : '0002',
            title: "Against The Rot Against The Rot",
            
        },
    ]

    const BodyCard = ({ item }) => {

        return (
            <div className=''>
                <Link to={`/novels/${chapterId}/${item?.id}`}>
                <div className="py-8  px-4">
                        <div className="flex justify-between items-center">
                            <div className='flex'>

                                <div className="w-12">
                                    {item?.number}
                                </div>
                                <div className='px-4'>
                                    {item?.title}
                                </div>
                            </div>
                            <div>
                                <div className="bg-yellow rounded-xl py-2 px-5 text-white">
                                    Read
                                </div>
                            </div>
                        </div>
                </div>
                    </Link>
                <div className="h-1 w-full bg-yellow"></div>
            </div>
        )
    }


    return (
        <>
        <Navbar />
            <ChapterLayout
                BodyCard={BodyCard}
                data={[..._chapters]}
                img={_image}


            />
        </>
    )
}


