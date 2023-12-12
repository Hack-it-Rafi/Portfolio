import { FaDownload } from "react-icons/fa";
const NavBar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar flex items-center">
                <div className="flex-1">
                    <img className="w-24" src="https://i.ibb.co/CB3Mjq2/81-r.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <button className="btn"><FaDownload></FaDownload></button>
                    <h1>Resume</h1>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
// #2969d4