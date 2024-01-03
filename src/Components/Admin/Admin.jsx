import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Volunteertb from "../Volunteertb/Volunteertb";
const Admin = () => {
  const [volunteers,setVolunteers]=useState([])
  useEffect(()=>{
    fetch("http://localhost:2000/volunteers")
    .then(res=>res.json())
    .then(data=>setVolunteers(data))
  },[])
  return (
    <div>
      <section className="p-3 flex flex-col md:flex-row rounded-xl">
        <div className="w-full md:w-1/5 md:h-screen bg-purple-300 ">
          <Link to="/volList">
            <p className="mt-3 px-4 text-white py-2  ">Voluntier List</p>
          </Link>
          <Link to="/addEvent">
            <p className="text-white px-4 py-2"> + Add Event</p>
          </Link>
        </div>
        <div className="w-full md:flex-1 md:w-3/4 bg-slate-200">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-auto mx-auto ">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 pt-3">
                  Volunetier List
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Banh mi cornhole echo park skateboard authentic crucifix
                  neutra tilde lyft biodiesel artisan direct trade mumblecore 3
                  wolf moon twee
                </p>
              </div>
              <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        Name
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Email Id
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Registration Date
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        Action
                      </th>
                      <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    volunteers.map(volunteer=><Volunteertb
                    key={volunteer._id}
                    volunteer={volunteer}></Volunteertb>)
                   }
                 </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Admin;
