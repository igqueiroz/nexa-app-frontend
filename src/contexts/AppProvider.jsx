import React from 'react';
import { LeadDataProvider } from "./LeadDataProvider"
import { ValidationProvider } from "./ValidationProvider"


export default function AppProvider(props) {
    const { children } = props
    return (
        <LeadDataProvider>
          	<ValidationProvider> 
				{children}
            </ValidationProvider>
        </LeadDataProvider>
    );
}