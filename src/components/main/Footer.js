import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    const lists = [
        {
            id: 1,
            icon: <FaLocationDot className="text-2xl font-bold"/>,
            detail: "House:32, Road:10, Nikunjo-1, Khilkhat, Dhaka",
        },
        {
            id: 2,
            icon: <FaLocationDot className="text-2xl font-bold"/>,
            detail: "House:32, Road:19, Nikunjo-2, Khilkhat, Dhaka",
        },
        {
            id: 3,
            icon: <MdOutlineMailOutline className="text-2xl font-bold"/>,
            detail: 'tapasp263@gmail.com',
        },
        {
            id: 4,
            icon: <FaPhoneVolume className="text-2xl font-bold"/>,
            detail: '+8801674345763',
        },
    ];

    const medias = [
        {
            id: 1,
            link: 'facebook',
            icon: <FaFacebook className="text-2xl font-bold"/>
        },
        {
            id: 1,
            link: 'linkedin',
            icon: <FaLinkedinIn className="text-2xl font-bold"/>
        },
        {
            id: 1,
            link: 'instagram',
            icon: <FaInstagram className="text-2xl font-bold"/>
        }
    ];


    const textDetails = " loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt.loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt."
    const textDetails2 = " loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt.loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt."
    return (
        <div>
            <div className="bg-indigo-950 px-5 py-2 flex ring-1 ring-gray-200 w-full h-auto">

                <div className="w-1/4 h-auto flex justify-center items-center">
                    <img src={logo} alt="" />
                </div>

                <div className="flex justify-center w-3/4 ">
                    {/* part 2 */}
                    <div className="block px-3 py-3 w-2/3 ">
                        <span className="flex justify-center py-3 text-white font-bold text-xl underline underline-offset-8">
                            Our Service
                        </span>
                        <p className="text-sm font-normal text-justify text-white py-1">
                            {textDetails}
                        </p>
                        <p className="text-sm font-normal text-justify text-white py-1">
                            {textDetails2}
                        </p>
                    </div>

                    {/* part 3 */}
                    <div className="px-5 py-3 block w-1/3">
                    <span className="flex justify-center py-3 text-white font-bold text-xl underline underline-offset-8">
                            Contact Us
                        </span>
                        <div className="flex justify-end ">
                           <ul className="block list-none">
                            {
                                lists.map((list) =>{
                                    return (
                                        <li key={list.id} className="text-sm font-normal tracking-wider flex gap-2 py-3 px-3 text-white">
                                            <span className="text-lg font-bold tracking-wide text-white">
                                                {list.icon}
                                            </span>
                                            {list.detail}
                                        </li>
                                    )
                                })
                            }
                           </ul>
                        </div>
                        <div className="flex justify-center py-3">
                            <ul className="list-none flex justify-start bg-transparent">
                                {
                                    medias.map((media) => {
                                        return (
                                            <li className="px-2 ">
                                                <Link to={media.link} className="text-indigo-500 font-normal text-xl"> {media.icon}</Link>

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center ring-1 ring-indigo-500 bg-indigo-950">
                <p className="text-sm font-normal text-white py-2">
                    &copy; All Right Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
