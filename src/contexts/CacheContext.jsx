import React, {useState} from 'react';

let CacheContext
const { Provider, Consumer } = CacheContext = React.createContext()

function CacheProvider(props) {
    const [cache, setCache] = useState({})
    const {children} = props

    function updateCache(name, newData) {
        setCache({ ...cache, [name]: newData })
    }

    function getCachedData(name) {
        return cache[name] ? cache[name] : []
    }

    return (
        <Provider value={{ updateCache, getCachedData, cache }}>
            {children}
        </Provider>
    );
}

export { CacheProvider, Consumer as CacheConsumer, CacheContext }