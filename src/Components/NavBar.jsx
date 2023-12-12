const NavBar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar flex items-center">
                <div className="flex-1">
                    <img className="w-24" src="https://i.ibb.co/CB3Mjq2/81-r.png" alt="" />
                </div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
// #2969d4