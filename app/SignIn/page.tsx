'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';

export default function SignIn() {


    return (
        <div className="flex min-h-screen bg-yellow-50">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
                    <Image
                        src="/user-avatar.svg"
                        width={80}
                        height={80}
                        className="mx-auto rounded-full"
                        alt="User Avatar"
                    />
                    <h2 className="text-pink-500 text-lg font-bold mt-4">Game-changer for our team!</h2>
                    <p className="text-gray-600 mt-2">
                        Industro has been a game-changer for our team! The curated news feed keeps us up-to-date
                        with the latest trends in Industry 5.0, and the Innovation Hub has made collaboration seamless.
                        It&apos;s the perfect platform for anyone looking to stay ahead in the industrial tech space.
                    </p>
                    <div className="mt-4">
                        <p className="font-bold">Alex Turner</p>
                        <p className="text-blue-500">Lead Engineer at Innovatech</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
                <div className="max-w-md w-full">
                    <h2 className="text-2xl font-bold text-blue-500 text-center">Sign in to your account</h2>
                    <p className="text-gray-500 text-center mt-2">Sign in to access personalized features</p>
                    <form className="mt-8 space-y-4">
                        <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div className="flex items-center py-2">
                            <input type="checkbox" id="privacy" className="mr-2" />
                            <label htmlFor="privacy" className="text-sm text-gray-500">
                                Agree about <a href="#" className="text-blue-500">Privacy Policy</a>
                            </label>
                        </div>

                        <Link href="/Dashboard">

                            <button
                                type='submit'
                                className="w-full py-2 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
                            >
                                Log in
                            </button>
                        </Link>
                    </form>
                    <p className="text-center mt-4 text-sm text-blue-500">
                        <a href="#">Forgot your password?</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
