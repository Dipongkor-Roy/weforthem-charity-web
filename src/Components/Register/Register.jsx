import { useState } from "react";

const Register = () => {
  const [volunteer,setVolunteers]=useState({})
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(volunteer)
    fetch('http://localhost:2000/volunteers', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(volunteer)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
     
  };
const handleInputBlur=event=>{
  console.log('onBlur triggered');
  const form=event.target;

  const fname=form.name;
  const femail=form.email;
  const fregDate=form.regdate;
  
  const nameValue=form.fname.value;
  const emailValue=form.femail.value;
  const regValue=form.fregdate.value;
  
  const newVolunteer={...volunteer};
  newVolunteer[fname]=nameValue;
  newVolunteer[femail]=emailValue;
  newVolunteer[fregDate]=regValue;

  setVolunteers(newVolunteer);
  console.log('Updated Volunteer:', newVolunteer);
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input onBlur={handleInputBlur}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input onBlur={handleInputBlur}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Date</label>
              <input onBlur={handleInputBlur}
                type="date"
                id="regdate"
                name="regdate"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input onBlur={handleInputBlur}
                type="password"
                id="pass"
                name='pass'
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Register
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </form>
    </div>
  );
};

export default Register;
