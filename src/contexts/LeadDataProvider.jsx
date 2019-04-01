import React, {useState} from 'react';

let LeadDataContext
const { Provider, Consumer } = LeadDataContext = React.createContext()

export default function LeadDataProvider(props) {
    const [leadData, setLeadData] = useState({})
    const { children } = props

    /**
     * Insere um novo campo em leadData ou atualiza um campo existente. Precisa
     * reveber um objeto com os atributo name e value.
     * @param {object} leadData - Objeto com os atributos a serem isneridos ou atualizados
     * @param {object} leadData.name - Atributo 'chave' do objeto leadData.
     * @param {object} leadData.value - Valor da chave do objeto leadData.
     */
    function updateLeadData(newData) {
        if( newData.hasOwnProperty("name") && newData.hasOwnProperty("value") ) {
            const {name, value} = newData
            setLeadData({ ...leadData, [name]: value })
        }
        else {
            setLeadData({ ...leadData, ...newData })
        }
    }

    function leadHasData(name) {
        if(leadData[name] !== undefined && (!isNaN(leadData[name]) || leadData[name].length > 0)) {
            return true
        }
        return false
    }

    return (
        <Provider value={{ leadData, updateLeadData, leadHasData }}>
            {children}
        </Provider>
    );
}

export { LeadDataProvider, Consumer as LeadDataConsumer, LeadDataContext }