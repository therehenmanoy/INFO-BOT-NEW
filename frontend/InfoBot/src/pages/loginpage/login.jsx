import images from "../../assets/bg.svg";
import image from "../../assets/logo.png"
import {TextField, Snackbar, Alert} from "@mui/material";
import {Button} from "@mui/material"
import gooogle from"../../assets/google.png"
import {useState} from "react";
import axios from "axios";
import OutlinedPasswordField from "../../components/pass_encrypt.jsx"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState("");
    const [error,setError] = useState("");
    const [success, setSuccess] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarType, setSnackbarType] = useState("success")

    const handleLogin =async () =>{
        setError("");
        setSuccess("");
        setOpenSnackbar(false);

        try{
            const response = await axios.post(" http://127.0.0.1:8000/login ",{
              username,
              password
            });
            if (response.status === 200) {
                setSuccess("Login Successful");
                setSnackbarType("success");
                setOpenSnackbar(true);
            }

        }catch (err) {
            setError(err.response?.data?.detail || "Login Failed");
            setSnackbarType("error");
            setOpenSnackbar(true);
        }
    };

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
  InputProps={{ style: { color: 'white' } }}
            onChange={(e) => setUsername(e.target.value)}
            />
  {/*          <TextField label="Password" variant="outlined" InputLabelProps={{ style: { color: 'white' } }}*/}
  {/*InputProps={{ style: { color: 'white' } }}*/}
  {/*          onChange={(e)=> setPassword(e.target.value)}*/}
  {/*          />*/}
            <OutlinedPasswordField password={password} setPassword={setPassword}/>
            {/*{error && <p style={{color:"red"}}>{error}</p>}*/}
            {/*{success && <p style={{color:"green"}}>{success}</p>}*/}
            <Button variant="contained" className="w-[8vw]" style={{borderRadius:"20px"
                ,fontWeight:"bolder"
                ,fontFamily:""}} onClick={handleLogin}>
                Login
            </Button>
            <div className="flex flex-row justify-center items-center">
                <span className="w-[80px] h-[2px] bg-white"></span>
                <span className="mx-3" style={{color:"white"}}>OR</span>
                <span className="w-[80px] h-[2px] bg-white"></span>
            </div>
            <Button variant="contained" disableElevation ><img src={gooogle} className="mx-3 w-[30px] h-[30px]"/>
  Sign in with Google
</Button>

        </div>
            <Snackbar
                open = {openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{vertical:"top",horizontal:"right"}}
                >
                <Alert
                    onClose={()=> setOpenSnackbar(false)}
                    severity={snackbarType}
                    sx={{width:"100%"}}
                >
                    {snackbarType === "success" ? success:error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Login;
