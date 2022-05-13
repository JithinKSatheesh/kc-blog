import React, {useState, useContext, useEffect} from 'react'

import Nav from 'Pages/Nav'
import Hero from './Hero'
import Contents from './Contents'
import About from './About'

import { useScrollBehaviours } from 'Pages/useScrollBehaviours'


// ===========================================
import { fetchConfigs } from 'API/fetch'
import { Store as StoreContent } from 'Store/contentStore'
const qs = require('qs');
// ===========================================

export default function Home(props) {

    const { ScrollToTop } = useScrollBehaviours()

    const [loading, setLoading] = useState(false)
    const _StoreContent  = useContext(StoreContent)

    const _config = _StoreContent?.state?.configs|| {}

    const getConfigs = async() => {
        const query = qs.stringify({
            
            populate: ['*'], 
            
          }, {
            encodeValuesOnly: true, // prettify url
          });
          setLoading(true)
        try {

            const res = await fetchConfigs(query)
            const data = res?.data?.data
            // console.log(res?.data?.data)
            _StoreContent.dispatch({
                type : 'initConfigs',
                payload : {...data}
            })
        } catch (ex) {

        }
        setLoading(false)
    }

    useEffect(() => {
        ScrollToTop()
        getConfigs()
    }, [])

    return (
        <>
        <Nav/>
        <Hero configs={_config?.attributes} />
        <Contents  />
        <About  configs={_config?.attributes}/>
        
        </>
    )
}
