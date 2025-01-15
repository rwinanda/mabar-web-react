import { createContext, useEffect, useState } from "react";

const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export const Loading = LoadingContext;
