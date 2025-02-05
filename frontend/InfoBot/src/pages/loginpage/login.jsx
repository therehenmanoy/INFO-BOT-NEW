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
        <div className="w-[30vw] h-[60vh] bg-gray-300 flex flex-col items-center p-4 gap-5"
        style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
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
            <Button variant="contained" className="w-[15vw]">Login</Button>
            <hr className="white" InputLabelProps={{ style: { color: 'white' } }}
  InputProps={{ style: { color: 'white' } }}/>OR<hr className="white"/>
        </div>
        </div>
    );
};

export default Login;
