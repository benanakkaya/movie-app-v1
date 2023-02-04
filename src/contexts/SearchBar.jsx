import React, { useState } from 'react'

export const SearchContext = React.createContext();

export default function SearchBar(props) {

    const [searchIndex,setSearchIndex] = useState("");

const values = {
    searchIndex,
    setSearchIndex
}



    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider >
    )
}
