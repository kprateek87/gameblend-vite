import { useState } from "react";
import JoinNowForm from "./JoinNowForm";

export default function JoinNowModal({ text = "Join Now", cn }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition cursor-pointer ${cn}`}
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-50 bg-gray-900/70">
          <div className="bg-gray-700 p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-600 text-xl hover:text-black cursor-pointer"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Join Us Now</h2>
            <JoinNowForm />
            {/* <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border p-2 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full border p-2 rounded-md"
                  placeholder="Why do you want to join?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Submit
              </button>
            </form> */}
          </div>
        </div>
      )}
    </>
  );
}
