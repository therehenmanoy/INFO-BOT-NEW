import images from "../../assets/bg.svg";

const Login = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center relative">
            {/* Background Image Div (blurred) */}
            <div
                id="div1"
                style={{
                    backgroundImage: `url(${images})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    zIndex: "-1",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",

                }}
            ></div>

            {/* Main Content (Login Box) */}
            <div
                className="w-[50vw] h-[50vh] flex justify-center items-center relative"
                style={{
                    backgroundImage: `url(${images})`,
                    backgroundSize: "cover",
                    zIndex: "1",
                    borderRadius: "20px",
                }}
            >
                {/* White Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white overlay
                        borderRadius: "20px", // Match the border radius with the content box
                    }}
                ></div>

                {/* Content Inside the Box */}
                <h1 className="text-black text-3xl relative z-10">Login</h1>
            </div>
        </div>
    );
};

export default Login;
