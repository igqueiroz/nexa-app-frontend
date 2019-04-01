import React from 'react';
import { LeadDataProvider } from "./LeadDataProvider"
import { HTTPProvider } from "./HTTPProvider"
import { ValidationProvider } from "./ValidationProvider"
import { CacheProvider } from "./CacheContext"


export default function AppProvider(props) {
    const { children } = props
    return (
        <LeadDataProvider>
            <HTTPProvider>
                <ValidationProvider>
                    <CacheProvider>
                            {children}
                    </CacheProvider>
                </ValidationProvider>
            </HTTPProvider>                  
        </LeadDataProvider>
    );
}