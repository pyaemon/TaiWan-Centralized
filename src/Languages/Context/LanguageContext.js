import React,{useState,createContext,useEffect} from 'react'

export const LanguageContext=createContext();

const LanguageContextProvider = props => {
    const [languageId, setlanguageId] = useState(0)
    useEffect(() => {
         //console.log('before state > ', languageId)
         window.localStorage.setItem('languageId',languageId)
         setlanguageId(window.localStorage.getItem('languageId',languageId))
    }, [languageId])
  
    return (
        <LanguageContext.Provider value={{languageId,setlanguageId}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;