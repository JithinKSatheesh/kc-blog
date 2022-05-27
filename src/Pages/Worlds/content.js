import React, {useEffect, useState, useContext} from 'react'

import Photo from 'assets/photo/photo.png'
import { Link } from 'react-router-dom'
import { CollectionLayout } from 'Layout/CollectionLayout'
import Navbar from 'Pages/Nav'

// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'


// ===========================================
import {  fetchWorlds } from 'API/fetch'
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');
// ===========================================


export default function Header(props) {

    const { ScrollToTop } = useScrollBehaviours()

    const [loading, setLoading] = useState(false)
    const _StoreContent  = useContext(StoreContent)
    const _worlds= _StoreContent?.state?.worlds|| []

    // console.log(_StoreContent)

    const getWorlds = async() => {
        const query = qs.stringify({
            
            // populate: ['novel_chapters'], 
            
          }, {
            encodeValuesOnly: true, // prettify url
          });
          setLoading(true)
        try {

            const res = await fetchWorlds(query)
            const data = res?.data?.data
            // console.log(res?.data?.data)
            _StoreContent.dispatch({
                type : 'initWorlds',
                payload : [...data]
            })
        } catch (ex) {

        }
        setLoading(false)
    }


    useEffect(() => {
        getWorlds()
        ScrollToTop()
    }, [])
    


    const data = [
        {
            id: 1,
            title: "Against The Rot",
            description : "Lorem ipsum dolor sit amet,  consectetuer adipiscing elit.  Aenean commodo ligula eget  dolor. Aenean massa. Cum  sociis natoque"
            
        },
        {
            id: 2,
            title: "Against The Rot",
            description : "Lorem ipsum dolor sit amet,  consectetuer adipiscing elit.  Aenean commodo ligula eget  dolor. Aenean massa. Cum  sociis natoque"
            
        },
    ]

    const BodyCard = ({ item }) => {
        
        const Square = () => ( <div className="h-2 w-2 bg-yellow rotate-45 mr-3"></div> )

        const _image = item?.attributes?.img ? item?.attributes?.img : Photo

        return (
            <div className=''>
                <Link to={`/worlds/${item?.id}`}>
                <div className="py-8  px-4">
                    <div className="flex">
                        <div className='h-32 w-32 bg-red-100'>
                            <img src={_image} alt="" className='w-full h-full' />
                        </div>
                        <div className='px-4 grow'>
                            <div>
                            {item?.attributes?.title}
                            </div>
                            <div className="text-xs max-w-xs">
                                {item?.attributes?.description}
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
                heading={"Worlds"}
                description={"A fictional world with laws, culture and norms of  its own. Some of these are experimental and may  or may not get any Light Novel or Shorts based on it."}
                BodyCard={BodyCard}
                data={[..._worlds]}
                loading={loading}

            />
        </>
    )
}


