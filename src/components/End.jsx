import React from "react";

function End() {
  return (
    <div className="mt-[24px] mx-[160px] h-[472px] w-auto  flex ">
     
      <div className="w-[50%]  flex items-center justify-center">
        
        
        <div className=" w-[70%] h-[90%] ml-[-100px]">
          
          <div className="flex justify-between">
            <button type="submit" className=" p-2 w-[47%] text-white bg-black hover:bg-blue-300  transition hover:text-black ">
              VIA SUPPORT CHAT
            </button>
            <button type="submit" className=" p-2 w-[47%] text-white bg-black hover:bg-blue-300  transition hover:text-black">
              VIA CALL
            </button>
          </div>

          <div className="mt-4 w-[100%] bg-black   text-center p-2 mb-4 hover:bg-blue-300 transition ">
            <button type="submit" className="text-white  hover:text-black">VIA EMAIL FORM</button>
          </div>

          <div>

            <form>

              <div>
                <label className="block text-black">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-black">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
          <label className="block text-black">Message:</label>
          <textarea
            name="text"
            placeholder="Enter your message"
            rows="4"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition hover:cursor-pointer hover:text-2xl"
        >
          Submit
        </button>

            </form>
          </div>
        </div>
      </div>

      <div className="w-[50%] object-contain static">
        <img className="w-full h-full static " src="./images/svg.svg" alt="" />
      </div>
    </div>
  );
}

export default End;
