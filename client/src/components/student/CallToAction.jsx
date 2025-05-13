import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="">
      {/* For interview
      <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
        <h1 className="text-xl md:text-4xl text-orange-800 font-semibold ">
          Boost your skills. Take an AI-powered interview now!
        </h1>
        <p className="text-gray-500 sm:text-sm">
          Practice real-world interview questions and get instant, intelligent
          feedback — all powered by AI. It’s the smarter way to prepare,
          improve, and get job-ready faster.
        </p>

        <div className="flex items-center font-medium gap-6 mt-4 ">
          <a
            href="https://interviewer-app-tau.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-10 py-3 rounded-md text-white bg-orange-600 hover:bg-orange-400">
              Get started
            </button>
          </a>
        </div>
      </div> */}

      {/* For chatbot */}
      <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
        <h1 className="text-xl md:text-4xl text-gray-800 font-semibold ">
          Learn everything with our automated online tutor.
        </h1>
        <p className="text-gray-500 sm:text-sm">
          It enables educators and students to get clarified on any issues,
          facilitates interactive learning through multimedia, quizzes, and
          assignments.
        </p>

        <div className="flex items-center font-medium gap-6 mt-4 ">
          <Link to={"/tutor"}>
            <button className="px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-500">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
