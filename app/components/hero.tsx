import React from "react";

export const Hero = () => {
  return (
    <div className="my-40">
      <div className="text-7xl tracking-tighter text-center font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        Unleash the power of <br /> intuitive finance
      </div>
      <p className="text-neutral-400 font-extralight mt-4 mx-auto text-center selection:bg-white">
        Say goodbye to the outdated financial tools. Every{" "}
        <span className="text-primary">small</span> business owner, <br />
        regardless of the <span className="text-primary">background</span>, can
        now manage their business like a pro. <br />
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-8 flex w-full max-w-lg mx-auto">
        <input
          type="text"
          className="border focus:outline-none flex-1 border-neutral-600 placeholder:text-neutral-400 text-white rounded-xl mr-4 px-4"
          placeholder="Enter your email"
        />
        <button className=" relative px-4 py-2 border border-neutral-700 rounded-2xl cursor-pointer shadow-md text-white">
          Join Waitlist
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </button>
      </div>
    </div>
  );
};
