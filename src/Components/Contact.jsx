import emailjs from '@emailjs/browser';
const Contact = () => {
    return (
        <div>
            <div className="w-full flex justify-center my-16">
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#2969d4] to-teal-600 inline-block text-transparent bg-clip-text">Contact Me</h1>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center items-center my-10'>
                <div className='flex-1 '>
                    <img className='w-1/2 mx-auto' src="https://i.ibb.co/Dwxvh3J/5143151.jpg" alt="" />
                </div>
                <div className='flex-1 '>
                    <div className="card shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea required className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#2969d4] hover:bg-blue-500 text-white">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;