import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { useState } from 'react';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="
      flex
      items-center
      justify-end
      w-full
      h-20
      px-4"
      >
        <div className="flex items-center w-full h-full text-gray-200 font-bold">
          <Link href="/">
            <span className="flex items-center w-full xs:text-2xl md:text-3xl pr-20 cursor-pointer">
              {title}
            </span>
          </Link>

          <div className="xs:hidden md:flex w-full items-center justify-end xs:text-xl md:text-xl transition duration-300 ease-in-out hover:text-white cursor-pointer">
            <Link href="/atendimento">
              <span className="pr-5">Mais notícias</span>
            </Link>
          </div>
        </div>
        <div
          className="
        flex
        items-center
        justify-end"
        ></div>
      </div>
      <div className="inset-y-0 left-0 flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-4 text-gray-400 hover:text-white focus:outline-none focus:ring-inset focus:ring-white w-full justify-end"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          {!isOpen ? (
            <svg
              className="block h-6 w-6"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
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
          )}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="sm:px-3 mb-4 border-t-2 border-b-2">
              <Link href="/news">
                <span className="hover:bg-gray-700 text-white block px-3 py-2 text-xl font-bold">
                  Mais notícias
                </span>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Header;
