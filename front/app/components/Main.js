import { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleButtonClick = () => {
    setIsOpen(true);
  };
  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative mx-36 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto hover:opacity-70"
                      src="/images/um_logo_white.png"
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="true"
                      onClick={handleToggleButtonClick}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-gray-400"
                >
                  Unknow_Musicとは
                </a>

                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-gray-400"
                >
                  利用規約
                </a>

                <a
                  href="#"
                  className="font-medium text-gray-300 hover:text-gray-400"
                >
                  お問い合わせ
                </a>

                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-600"
                >
                  ログイン
                </a>
              </div>
            </nav>
          </div>
          <Transition
            show={isOpen}
            enter="duration-150 ease-out "
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in "
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div
                ref={ref}
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-gray-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto hover:opacity-70"
                        src="/images/um_logo_white.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={handleCloseButtonClick}
                      >
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      Unknow_Musicとは
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      利用規約
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-500 hover:bg-gray-400"
                    >
                      お問い合わせ
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-900 bg-gray-400 hover:bg-gray-300"
                  >
                    Log in
                  </a>
                </div>
              </div>
            )}
          </Transition>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center sm:container mx-auto lg:text-left">
              <h2 className="tracking-tight font-medium text-gray-400 sm:text-5xl md:text-1xl">
                <img
                  className="inline-block  text-green-600 w-4/5"
                  src="/images/um_name.png"
                />
                <span className="text-2xl block text-indigo-500 xl:inline-block">
                  知られざる名曲を見つけよう
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                「世間で売れている音楽が本当に1番良い音楽か？」
                <br />
                をコンセプトに、あまり知られていないアーティストや曲、昔の名曲等をシェア出来る無料ブラウザアプリ。
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    アカウント登録
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    ユーザー登録無しで利用
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/images/main.jpg"
          alt="Main Photo"
        />
      </div>
    </div>
  );
}
