import images from "../../assets/bg.svg";
import image from "../../assets/logo.png"
import {TextField} from "@mui/material";
import {Button} from "@mui/material"
const Login = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative"
                style={{
                    backgroundImage: `url(${images})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                }}>
        <div className="w-[25vw] h-[65vh] bg-gray-300 flex flex-col items-center p-4 gap-5"
        style={{
            backgroundColor: "rgba(191,191,191,0.24)",
            borderRadius:"15px",
            borderColor:"white",
        }}>
            <div className="w-[100px] h-[100px] rounded-[50%] bg-white">
                <img src={image} alt="logo"/>
            </div>
            <TextField label="Username" variant="outlined" InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}/>
            <TextField label="Password" variant="outlined" InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}/>
            <Button variant="contained" className="w-[8vw] " style={{borderRadius:"20px"
                ,fontWeight:"bolder"
                ,fontFamily:""}}>
                Login
            </Button>
            <div className="flex flex-row justify-center items-center">
                <span className="w-[80px] h-[2px] bg-white"></span>
                <span className="mx-3" style={{color:"white"}}>OR</span>
                <span className="w-[80px] h-[2px] bg-white"></span>
            </div>
            <Button variant="contained" disableElevation>
  Sign in with Google {}
</Button>


        </div>
        </div>
    );
};

export default Login;
