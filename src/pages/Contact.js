import { useState } from "react";
import EmpCard from "../components/card/EmpCard";
import RotateText from "../components/rotate/RotateText";
import EmpProfile from "../storage/EmpProfile";
import image from '../assets/logo192.png';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + ' ' + email + '' + details);
    };

    return (
        <div className="block px-2 py-2 w-full hh-auto">
            {/* first part */}
            <div className="flex justify-between bg-white px-5 py-3 h-auto">
                <div className="block px-5 py-2 w-2/3 ">
                    <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                        Introduce Our Experts
                    </span>
                    <div className="grid grid-cols-2 gap-8 px-3 py-3">
                        {
                            EmpProfile.map((emp) => {
                                return (
                                    <EmpCard key={emp.id} emp={emp} />
                                )
                            })
                        }


                    </div>
                </div>
                {/* form view */}
                <div className="px-5 py-1 w-1/3 right-5 relative h-screen ">
                    <div className="py-5 px-5 block w-full bg-indigo-950 rounded-xl">
                        <form onSubmit={handleSubmit} className="block w-full">
                            <div className="flex justify-center">
                                <span className="text-2xl font-medium text-white py-2 text-center">
                                    Contact with us
                                </span>
                            </div>
                            <div className="w-full py-1">
                                <label className="text-sm font-bold w-full tracking-wide text-gray-200 ">
                                    Name
                                </label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.vallue)} autoComplete="off" placeholder="Enter Your Name" className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent" />
                            </div>
                            <div className="w-full py-1">
                                <label className="text-sm font-bold w-full py-2 tracking-wide text-gray-200 ">
                                    Email
                                </label>
                                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.vallue)} autoComplete="off" placeholder="Enter Your Name" className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent" />
                            </div>
                            <div className="w-full py-1">
                                <label className="text-sm font-bold w-full py-2 tracking-wide text-gray-200 ">
                                    Description
                                </label>
                                <textarea name="details" value={details} onChange={(e) => setDetails(e.target.vallue)} placeholder="Enter Your Details" className="w-full h-auto px-2 py-2 ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent "></textarea>
                            </div>
                            <div className="py-2 flex justify-start ">
                                <button className="bg-indigo-800 rounded-lg text-sm font-bold tracking-wide text-white py-2 px-3 shadow-lg shadow-gray-800" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-white px-5 py-3 h-auto">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    Why Choose our service
                </span>
                <div className="flex justify-between px-2">
                    <div className="flex justify-start px-2 py-3 w-2/3">
                        <p className="text-sm font-normal px-2 tracking-wide text-justify">
                            Consectetur elit laboris labore dolor tempor duis. Ullamco adipisicing sint eu Lorem do qui velit eu eu culpa labore. Duis et voluptate aliquip consequat velit proident. Laboris nostrud do enim occaecat sit occaecat consequat ullamco. Ullamco nostrud et id nulla sit magna dolore amet. Aliquip id quis proident sint. Sit magna nulla magna cillum elit pariatur excepteur veniam magna fugiat labore dolore anim reprehenderit.

                            Do eu aliqua duis deserunt id ullamco enim aliqua incididunt fugiat ut pariatur. Deserunt anim Lorem ipsum tempor do nulla. Eu fugiat et quis anim est minim labore reprehenderit occaecat. Elit laboris anim minim amet et laboris adipisicing excepteur dolor qui aute do nulla ex.

                            Reprehenderit aliquip irure est cupidatat ad aliquip adipisicing cillum. Adipisicing mollit tempor adipisicing et non laboris est voluptate nisi. Commodo ex id ad consectetur veniam sint ut non fugiat. Adipisicing non enim do sint. Deserunt dolor deserunt sint ut est ut mollit cupidatat proident est esse incididunt. Consectetur ut voluptate minim fugiat.
                        </p>
                    </div>
                    <div className="w-1/3 h-auto px-5 py-3 flex justify-center items-center shadow-2xl shadow-indigo-700 rounded-xl mx-4">
                       
                        <img src={image} alt="" className="w-32 h-32 rounded-full ring-2 ring-indigo-900 px-1 py-1 object-cover shadow-xl shadow-indigo-900 scale-100 hover:scale-125 hover:shadow-none transition-all duration-500 " />
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;