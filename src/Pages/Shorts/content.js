import React, {useEffect, useState, useContext} from 'react'

import Photo from 'assets/photo/photo.png'
import { Link } from 'react-router-dom'
import { CollectionLayout } from 'Layout/CollectionLayout'
import Navbar from 'Pages/Nav'

// ** hooks
import { useScrollBehaviours } from 'Pages/useScrollBehaviours'


// ===========================================
import { fetchShorts } from 'API/fetch'
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');
// ===========================================

export default function Header(props) {

    const { ScrollToTop } = useScrollBehaviours()

    const [loading, setLoading] = useState(false)
    const _StoreContent  = useContext(StoreContent)
    const _shorts= _StoreContent?.state?.shorts|| []

    // console.log(_StoreContent)

    const getShorts = async() => {
        const query = qs.stringify({
            
            // populate: ['novel_chapters'], 
            
          }, {
            encodeValuesOnly: true, // prettify url
          });
          setLoading(true)
        try {

            const res = await fetchShorts(query)
            const data = res?.data?.data
            // console.log(res?.data?.data)
            _StoreContent.dispatch({
                type : 'initShorts',
                payload : [...data]
            })
        } catch (ex) {

        }
        setLoading(false)
    }


    useEffect(() => {
        getShorts()
        ScrollToTop()
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
        
        const Square = () => ( <div className="h-2 w-2 bg-yellow rotate-45 mr-2"></div> )

        return (
            <div className=''>
                <Link to={`/shorts/${item?.id}`}>
                <div className="py-8  px-4">
                    <div className="flex items-center justify-between">
                        <div className='px-4 grow'>
                            <div>
                            {item?.attributes?.title}
                            </div>
                            <div className="flex py-3">
                                <div className="text-xs max-w-xs flex items-center">
                                  <Square />  {item?.attributes?.collection}
                                </div>
                                <div className="text-xs max-w-xs flex items-center ml-5">
                                  <Square />  {item?.attributes?.year}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-yellow rounded-xl py-2 px-5 text-white text-xs">
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
            <CollectionLayout
                heading={"Shorts"}
                description={"Based on Worlds, these are one shots that may or may not have a sequel. Some of them are a part of a series while others are stand-alone."}
                BodyCard={BodyCard}
                data={[..._shorts]}
                loading={loading}

            />
        </>
    )
}


