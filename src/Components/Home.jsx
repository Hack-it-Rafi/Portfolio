const Home = () => {
    return (
        <div>
            <div className="w-full text-center">
            <h1 className="text-2xl md:text-6xl font-semibold bg-gradient-to-r from-[#2969d4] to-teal-600 inline-block text-transparent bg-clip-text">MERN Developer, Designer</h1><br />
                <p className="font-changa mt-5 text-lg bg-gradient-to-r from-[#2969d4] to-teal-600 inline-block text-transparent bg-clip-text">I am learning, so this status will be changed periodically</p>
            </div>
            <div className="w-full flex justify-center">
                <img className="w-[400px]" src="https://i.ibb.co/F5vPMgc/github1.png" alt="" />
            </div>
            <div className="w-full flex justify-center mt-20">
                <img className="w-[800px]" src="https://i.ibb.co/wzhxvqP/hero-devices1.png" alt="" />
            </div>
            <div className="bg-[#2969d4] py-60 text-center">
                <h1 className="text-5xl text-white font-bold">Hi, I’m Rafi. Nice to meet you.</h1>
                <p className="text-white mt-6 w-2/3 mx-auto">Since beginning my journey as a freelance designer over 11 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. Im quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            </div>
        </div>
    );
};

export default Home;