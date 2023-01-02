import github_logo from "../assets/github_logo.png";

const array = ["Terms","Privacy", "Security" ,"Contact GitHub" ];

const Home = ()=>{
    return(
        <div className="flex flex-col items-center p-8">
            <div classNme = "flex flex-col justify-center items-center gap-y-6">
                <img className = "h-16 pl-12" src = {github_logo}></img>
                <h1 className="text-2xl font-light">Sign in to Github</h1>
            </div>
            

            <div className = "mt-4">
                <div className="bg-gray-50 p-4 border border-gray-300 rounded-md min-w-[310px]">
                    <div className="flex flex-col gap-y-2">
                        <p className = "text-sm">Username or email address</p>
                        <input className ="border border-gray-300 rounded-md py-[4px] px-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-500" type="text"></input>
                    </div>

                    <div className = "flex justify-between mt-4">
                        <p className = "text-sm">Password</p>
                        <a href= "#" className="text-[12px] text-blue-600 font-light">Forgot Password ? </a>
                    </div>

                    <div className="flex flex-col mt-2 gap-y-2">
                        <input type = "password" className ="border border-gray-300 rounded-md py-[4px] px-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                        <button className="bg-green-600 font-semibold text-white text-sm p-[6px] item-center rounded
                        rounded-md">Sign In</button>
                    </div>

                    <div className = "mt-4 border border-gray-300 bg-white p-4 rounded-md flex items-center justify-center" >
                        <p className="text-sm">New to Github?<span
                        className="text-blue-600 cursor-pointer hover:underline">create an account.</span></p>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-4 mt-20">
                {
                    array.map((item,id)=>(
                        <p className={`${id===3 ? "hover:text-blue-600 text-black":""} text-[12px] text-blue-600 cursor-pointer hover:underline`}>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;