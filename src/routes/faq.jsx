import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button and fill in your details to register.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes! You can explore most features for free, but premium options are available.",
  },
  {
    question: "How do I report a bug or issue?",
    answer:
      "Go to the support page and submit a report with details and screenshots.",
  },
  {
    question: "Can I change my username?",
    answer: "Yes, go to your profile settings and update your username.",
  },
];
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Frequently Asked Questions
        </h1>

        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm bg-gray-800 text-white"
              >
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No matching questions found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FAQ;
