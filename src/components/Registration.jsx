import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // console.log({name:name,email:email,password:password});
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!isChecked) {
      return;
    }
    const user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    setIsSubmit(true);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card  w-11/12 lg:w-2/5 glass bg-sky-300 border-2 border-black">
        <form onSubmit={(e) => handleSignUp(e)} className="card-body ">
          <h2 className=" text-center text-2xl text-black font-bold">
            SignUp Form
          </h2>
          <div>
            <div className="flex flex-col  space-y-2">
              <div>
                <label className="ml-0 md:ml-24 text-black font-extrabold">
                  Name:
                </label>
              </div>
              <div>
                <input
                  onChange={(change) => setName(change.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  className="ml-0 md:ml-24 input input-bordered input-accent bg-stone-200 w-full max-w-sm md:max-w-md text-black font-semibold"
                  required
                />
              </div>
              <div>
                <label className="ml-0 md:ml-24 text-black font-extrabold">
                  Email:
                </label>
              </div>
              <div>
                <input
                  onChange={(change) => setEmail(change.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="ml-0 md:ml-24 input input-bordered input-accent bg-stone-200 w-full max-w-sm lg:max-w-md text-black font-semibold"
                  required
                />
              </div>
              <div>
                <label className="ml-0 md:ml-24 text-black font-extrabold">
                  Password:
                </label>
              </div>
              <div>
                <input
                  onChange={(change) => setPassword(change.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  className="ml-0 md:ml-24 input input-bordered input-accent bg-stone-200 w-full max-w-sm md:max-w-md text-black font-semibold"
                  required
                />
              </div>
            </div>
          </div>
          <div className="ml-0 md:ml-24 text-black">
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setIsChecked(e.target.checked)}
            />{" "}
            Accept all the terms and conditions
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-glass bg-black text-white border-none ">
              SignUP
            </button>
          </div>
        </form>
      </div>
      {isSubmit && (
        <div className="fixed top-0 flex justify-center items-center h-screen w-full">
          <div className="w-10/12 lg:w-2/5 h-3/4 md:h-2/4 lg:h-2/3 p-8 my-8 rounded-3xl bg-purple-300 text-center text-black">
            <h2 className=" font-extrabold mt-8 text-3xl">
              Successfully submitted the form
            </h2>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
          </div>
        </div>
      )}
    </main>
  );
};

export default Registration;
