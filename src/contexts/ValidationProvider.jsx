import React, {useState, useContext, useEffect} from 'react';


let ValidationContext
const { Provider, Consumer } = ValidationContext = React.createContext()

function ValidationProvider(props) {
    const [fields, setfields] = useState({})

    return (
        <Provider>
           
        </Provider>
    );
}

export { ValidationProvider, Consumer as ValidationConsumer, ValidationContext }