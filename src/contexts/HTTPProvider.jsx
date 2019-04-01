import React, {useState, useEffect} from 'react';
import axios from "axios"

let HTTPContext
const { Provider, Consumer } = HTTPContext = React.createContext()

function HTTPProvider(props) {
    const [token, setToken] = useState(null)
    const {children} = props

    useEffect(() => {
        !token && updateToken()
    })

    async function updateToken() {
        const headers = { "Ocp-Apim-Subscription-Key": "ddf1d118a1bd4e7880a3756a037393f3" }
        const req = await axios.get("https://e2ghom.azure-api.net/admission-inscricao/Inscricao/ObterToken", {headers})
        const {data}= await req
        const {access_token, token_type} = await data
        setToken(`${token_type} ${access_token}`)
    }

    function setHttp() {
        return token && axios.create({
            baseURL: "https://e2ghom.azure-api.net/admission-inscricao",
            headers: {
                Authorization: token,
                "Ocp-Apim-Subscription-Key": "ddf1d118a1bd4e7880a3756a037393f3",
                "Content-Type": "application/json"
            }
        })
    }

    return (
        <Provider value={{ http: setHttp() }}>
            {children}
        </Provider>
    );
}

export { HTTPProvider, Consumer as HTTPConsumer, HTTPContext }