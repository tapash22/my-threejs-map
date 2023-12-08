import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + ' ' + email + '' + details);
    };

    return (
        <div className="flex justify-between bg-white px-5 py-3">
            <div className="block px-5 py-2 w-2/3 ">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    Introduce Our Experts
                </span>
                <div className="grid grid-cols-2 gap-4 px-3">
                    <div className="h-40 w-full px-2 py-2 bg-red-800">
                        this is vue
                    </div>
                    <div className="h-40 w-full px-2 py-2 bg-red-800">
                        this is react
                    </div>
                    <div className="h-40 w-full px-2 py-2 bg-red-800">
                        this is vue
                    </div>
                    <div className="h-40 w-full px-2 py-2 bg-red-800">
                        this is react
                    </div>
                </div>
            </div>
            <div className="px-5 py-1 w-1/3 fixed right-5 bg-red-500">
                <div className="py-5 px-3 flex justify-center items-center w-full">
                    <form onSubmit={handleSubmit} className="block w-full">
                        <div className="w-full py-1">
                            <label className="text-sm font-bold w-full tracking-wide my-2 ">
                                Name
                            </label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.vallue)} autoComplete="off" placeholder="Enter Your Name" className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900" />
                        </div>
                        <div className="w-full py-1">
                            <label className="text-sm font-bold w-full py-2 tracking-wide ">
                                Email
                            </label>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.vallue)} autoComplete="off" placeholder="Enter Your Name" className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900" />
                        </div>
                        <div className="w-full py-1">
                            <label className="text-sm font-bold w-full py-2 tracking-wide ">
                                Description
                            </label>
                            <textarea name="details" value={details} onChange={(e) => setDetails(e.target.vallue)} placeholder="Enter Your Details" className="w-full h-auto px-2 py-2"></textarea>
                        </div>
                        <div className="py-2 flex justify-start ">
                            <button className="bg-indigo-800 rounded-lg text-sm font-bold tracking-wide text-white py-2 px-3 shadow-lg shadow-gray-800" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;