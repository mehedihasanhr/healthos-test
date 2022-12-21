import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Badge from '../Badge';
import NavSearchBox from './NavSearchBox';
import SubNav from './SubNavbar';

const Navbar = () => {
    return (
        <header className="w-full h-fit border-b border-slate-200">
            {/* main nav bar */}
            <div className="container">
                <div className="h-16 md:h-24 flex items-center justify-between border-b border-dashed border-slate-2">
                    <div className="flex items-center space-x-3">
                        {/* menu toggle button for mobile or tablat */}
                        <button
                            aria-labelledby="menuButton"
                            className="flex md:hidden text-gray-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>

                        {/* logo */}
                        <Link href="/">
                            <div className="relative w-28 h-10 sm:w-36 sm:h-14">
                                <Image
                                    src="/logo.svg"
                                    alt="logo"
                                    fill
                                    sizes="150px"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* search bar */}
                    <NavSearchBox />
                    {/* nav links */}
                    <ul className="flex items-center space-x-5">
                        {/* search button */}
                        <li>
                            <Link
                                href="/"
                                className="flex lg:hidden text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="i fi-rr-search" />
                                    </span>
                                </div>
                            </Link>
                        </li>

                        {/* contact button */}
                        <li>
                            <Link
                                href="/"
                                className="hidden md:flex text-slate-700 space-x-2 group select-none border-0 lg:border-r border-slate-200 lg:pr-3"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="i fi-rr-headset" />
                                    </span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <span className="block text-gray-500 text-xs">
                                        Contact
                                    </span>
                                    <span className="whitespace-nowrap text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        123-456-7890
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                        <i className="fi fi-rr-user" />
                                    </span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <span className="block text-gray-500 text-xs">
                                        Sign In
                                    </span>
                                    <span className="whitespace-nowrap text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        Account
                                    </span>
                                </div>
                            </Link>
                        </li>

                        {/* favorite */}
                        <li>
                            <Link
                                href="/"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center mt-1">
                                    <Badge badge="3">
                                        <span className="text-xl sm:text-2xl group-hover:text-blue-500">
                                            <i className="fi fi-rr-heart" />
                                        </span>
                                    </Badge>
                                </div>
                            </Link>
                        </li>

                        {/* cart */}
                        <li>
                            <Link
                                href="/carts"
                                className="flex text-slate-700 space-x-2 group select-none"
                            >
                                <div className="flex items-center justify-center mt-1">
                                    <Badge badge="5">
                                        <span className="text-xl sm:text-2xl mt-1 group-hover:text-blue-500">
                                            <i className="fi fi-rr-shopping-cart" />
                                        </span>
                                    </Badge>
                                </div>
                                <div className="hidden sm:inline-block">
                                    <span className="block text-gray-500 text-[10px] sm:text-xs">
                                        Total
                                    </span>
                                    <span className="whitespace-nowrap text-sm sm:text-base text-slate-600 font-medium block -mt-1 group-hover:text-blue-500">
                                        $ 300.00
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* sub nav bar */}
            <SubNav />
        </header>
    );
};

export default Navbar;
