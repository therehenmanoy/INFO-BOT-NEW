import image from "../../assets/404.svg"
import {Button} from "@mui/material"
const ErrorPage = () =>{
    return(
        <div className="w-[100vm] h-[100vh] bg-white flex flex-col items-center justify-center gap-2.5" >
            <img src={image} alt="404"/>
            <div className="font-sans text-xl">
                Something went wrong...
            </div>
            <Button variant="outlined" style={{backgroundColor:"lavender", color:"darkcyan", borderRadius:"20px"}}>Go Back</Button>
        </div>
    )
}

export  default ErrorPage
