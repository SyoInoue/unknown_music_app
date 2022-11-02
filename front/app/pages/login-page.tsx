import Auth from "../components/Auth";
import Link from "next/link";
import Layout from "../components/Layout";

const LoginPage:React.FC = () => {
  return (
    <Layout title="Main page">
      <div className="text-center bg-gray-900 shadow-xl rounded-xl sm:px-24 px-28 py-28 mt-28 mb-12 sm:max-w-lg mx-auto container">
        <Auth />
        <div className="flex justify-center">
          <Link href="/">
            <div className="flex cursor-pointer mt-20 hover:text-gray-500">
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
              <span>Back to main page</span>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default LoginPage;
