import { Link } from "react-router-dom";
import car from "../../assets/car.png";
import { FaFacebook, FaLinkedinIn, FaInstagram  } from "react-icons/fa";

const Footer = () => {
    const lists= [
        {
            id:1,
            name:'Home',
            link:'/',
        },
        {
            id:2,
            name:'About',
            link:'/about',
        },
        {
            id:3,
            name:'Contact',
            link:'/contact',
        },
    ];

    const medias =[
        {
            id:1,
            link:'facebook',
            icon: <FaFacebook  />
        },
        {
            id:1,
            link:'linkedin',
            icon:<FaLinkedinIn  />
        },
        {
            id:1,
            link:'instagram',
            icon: <FaInstagram  />
        }
    ];

 
    const textDetails = " loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt.loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt."
    const textDetails2 = " loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt.loremIpsum dolor ea dolor fugiat qui. Id nulla consectetur aliquip elit id veniam consequat et. Et consequat adipisicing aute incididunt ullamco amet eiusmod amet culpa amet. Anim esse labore proident exercitation nisi consequat ipsum do deserunt."
  return (
   <div>
     <div className="bg-gray-800 px-5 py-2 flex ring-1 ring-gray-200 w-full h-auto">
      <div className="w-1/4 h-auto flex justify-center items-center">
        <img src={car} alt="" className="h-24 w-24" />
      </div>
      <div className="flex justify-center w-3/4 ">
        <div className="block px-2 py-3 w-3/4 ">
            
          <p className="text-sm font-normal text-justify text-white py-1">
            {textDetails}
          </p>
          <p className="text-sm font-normal text-justify text-white py-1">
            {textDetails2}
          </p>
          <div className="flex justify-center py-3">
            <ul className="list-none flex bg-transparent">
                {
                    medias.map((media) =>{
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
        <div className="px-2 py-2 flex justify-center items-center w-1/4">
            <ul className="list-none block bg-transparent">
               {
                lists.map((list)=>{
                    return (
                        <li key={list.id} >
                            <Link to={list.link} className="text-sm font-medium underline underline-offset-4 text-white tracking-wider">{list.name}</Link>
                        </li>
                    )
                })
               }
            </ul>
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
