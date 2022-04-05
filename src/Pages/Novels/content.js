import React, {useEffect, useContext, useState} from 'react'

import Photo from 'assets/photo/photo.png'
import { Link } from 'react-router-dom'
import { CollectionLayout } from 'Layout/CollectionLayout'
import Navbar from 'Pages/Nav'

// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'

// ===========================================
import { fetchNovels } from 'API/fetch'
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');
// ===========================================


export default function Header(props) {

    const { ScrollToTop } = useScrollBehaviours()

    
    const [loading, setLoading] = useState(false)
    const _StoreContent  = useContext(StoreContent)
    const _novels = _StoreContent?.state?.novels || []

    

    const getNovels = async() => {
        const query = qs.stringify({
            
            populate: ['novel_chapters'], 
            
          }, {
            encodeValuesOnly: true, // prettify url
          });
          setLoading(true)
        try {

            const res = await fetchNovels(query)
            const data = res?.data?.data
            // console.log(res?.data?.data)
            _StoreContent.dispatch({
                type : 'initNovels',
                payload : [...data]
            })
        } catch (ex) {

        }
        setLoading(false)
    }

    useEffect(() => {
        ScrollToTop()
        getNovels()
    }, [])
    

    const data = [
        {
            id: 1,
            title: "Against The Rot",
            type: 'Fantasy',
            collection: 'Legends of Zoonya',
            year: '2021',
            tag: 'Ongoing'
        },
        {
            id: 2,
            title: "Against The Rot",
            type: 'Fantasy',
            collection: 'Legends of Zoonya',
            year: '2021',
            tag: 'Ongoing'
        },
    ]

    const BodyCard = ({ item }) => {
        
        const Square = () => ( <div className="h-2 w-2 bg-yellow rotate-45 mr-3"></div> )

        const _image = item?.img ? item?.img : Photo

        return (
            <div className=''>
                <Link to={`/novels/${item?.id}`}>
                <div className="py-8  px-4">
                    <div className="flex">
                        <div className='h-32 w-32'>
                            <img src={_image} alt="" className='w-full h-full' />
                        </div>
                        <div className='px-4'>
                            {item?.title}
                            <div className="py-1 flex text-xs items-center">
                                    <Square />
                                {item?.type}
                            </div>
                            <div className="py-1 flex text-xs items-center">
                                    <Square />
                                {item?.collection}
                            </div>
                            <div className="py-1 flex text-xs items-center">
                                    <Square />
                                {item?.year}
                            </div>
                            <div className="py-1 flex text-xs items-center">
                                    <Square />
                                {item?.tag}
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
            <CollectionLayout
                heading={"Novels"}
                description={"Based on Worlds, these are episodic Light Novels which gets updated with the passage of time."}
                BodyCard={BodyCard}
                data={[..._novels]}
                loading={loading}

            />
        </>
    )
}


