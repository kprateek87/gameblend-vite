function JoinNowForm() {
  return (
    <form className="space-y-4">
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
        <label className="block text-sm font-medium">Email Address</label>
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
    </form>
  );
}

export default JoinNowForm;
