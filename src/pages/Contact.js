import { useState } from "react";
import EmpCard from "../components/card/EmpCard";
// man image

import man1 from "../assets/man/1.png";
import man2 from "../assets/man/2.png";
import man3 from "../assets/man/3.png";
import man4 from "../assets/man/4.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const empProfile = [
    {
      id: 1,
      name: "Jon Roy",
      position: "...",
      email: "me@gmail.com",
      experience: "7 year Experience",
      image: man1,
    },
    {
      id: 2,
      name: "Jon David Roy",
      position: "...",
      email: "info@gmail.com",
      experience: "5 year Experience",
      image: man2,
    },
    {
      id: 3,
      name: "Roy Stifen",
      position: "...",
      email: "hot@gmail.com",
      experience: "6 year Experience",
      image: man3,
    },
    {
      id: 4,
      name: "Tapash Paul",
      position: "...",
      email: "tapasp263@gmail.com",
      experience: "3 year experience",
      image: man4,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " " + email + "" + details);
  };

  return (
    <div className="block">
      <div className="flex justify-between bg-white px-5 py-3 h-auto">
        <div className="block px-5 py-2 w-2/3 ">
          <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
            Introduce Our Experts
          </span>
          <div className="grid grid-cols-2 gap-8 px-3 py-3">
            {empProfile.map((emp) => {
              return <EmpCard key={emp.id} emp={emp} />;
            })}
          </div>
        </div>
        {/* form view */}
        <div className="px-2 py-1 w-1/3 flex justify-center items-center ">
          <div className="py-5 px-5 block h-1/2 bg-indigo-950 rounded-xl">
            <form onSubmit={handleSubmit} className="block w-full h-full">
              <div className="flex justify-center">
                <span className="text-2xl font-medium text-white py-2 text-center">
                  Contact with us
                </span>
              </div>
              <div className="w-full py-1">
                <label className="text-sm font-bold w-full tracking-wide text-gray-200 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.vallue)}
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent"
                />
              </div>
              <div className="w-full py-1">
                <label className="text-sm font-bold w-full py-2 tracking-wide text-gray-200 ">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.vallue)}
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  className="h-8 w-full py-2 px-2 text-sm font-medium tracking-wide ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent"
                />
              </div>
              <div className="w-full py-1">
                <label className="text-sm font-bold w-full py-2 tracking-wide text-gray-200 ">
                  Description
                </label>
                <textarea
                  name="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.vallue)}
                  placeholder="Enter Your Details"
                  className="w-full h-auto px-2 py-2 ring-1 ring-indigo-900 my-1 rounded-lg bg-transparent "
                ></textarea>
              </div>
              <div className="py-2 flex justify-start ">
                <button
                  className="bg-indigo-800 rounded-lg text-sm font-bold tracking-wide text-white py-2 px-3 shadow-lg shadow-gray-800"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Contact;
