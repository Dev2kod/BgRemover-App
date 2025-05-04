import { useAuth } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

const AppContext = createContext()

const AppContextProvider = (props) =>{
    const [credit, setCredit] = useState(false);
    const [image, setImage] = useState(false)

    const backendurl = import.meta.env.VITE_BACKEND
    
    const {getToken} = useAuth();

    const loadCreditData=async()=>{
        try {
            const token = await getToken()
            const {data} = await axios.get(backendurl+"/api/user/credits",{headers:{token}})
            if(data.success){
                setCredit(data.credits)
                console.log("Credits are:"+data.credits);
            }
                
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value = {
        credit,setCredit,
        loadCreditData,
        backendurl,
        image,setImage
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider,AppContext}