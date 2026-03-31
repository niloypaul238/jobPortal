import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 mt-5">
                <div className="max-w-7xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-teal-300 sm:justify-start">
                                <Image className='rounded-full' height={40} width={40} alt='logo' src={'/original-8939a7332eb5bdc39b71ea43d0b14965.webp'} />
                            </div>

                            <p
                                className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                                consequuntur amet culpa cum itaque neque.
                            </p>

                            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">

                            </ul>
                        </div>

                        <div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
                        >
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">About Us</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Company History
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Meet the Team
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Employee Handbook
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Careers
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Our Services</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Web Development
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Web Design
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Marketing
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Google Ads
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Helpful Links</p>

                                <nav className="mt-8">
                                    <ul className="space-y-4 text-sm">
                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                FAQs
                                            </Link>
                                        </li>

                                        <li>
                                            <Link className="text-white transition hover:text-white/75" href="/">
                                                Support
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                className="flex group justify-center sm:justify-start gap-1.5"
                                                href="/"
                                            >
                                                <span className="text-white transition group-hover:text-white/75">
                                                    Live Chat
                                                </span>

                                                <span className="relative flex w-2 h-2 -mr-2">
                                                    <span
                                                        className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"
                                                    ></span>
                                                    <span
                                                        className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"
                                                    ></span>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-white">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                            href="/contact"
                                        >
                                            <Mail size={20} className='text-white' />

                                            <span className="text-white transition group-hover:text-white/75">
                                                resume@doe.com
                                            </span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                            href="/"
                                        >
                                            <Phone size={20} className='text-white' />

                                            <span className="text-white transition group-hover:text-white/75">
                                                0123456789
                                            </span>
                                        </Link>
                                    </li>

                                    <li
                                        className="flex items-start justify-center gap-1.5 sm:justify-start"
                                    >
                                        <MapPin size={30} className='text-white' />

                                        <address className="-mt-0.5 not-italic text-white">
                                            23 Floor, Dhaka, Bangladesh
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </footer>
        </div>
    );
};

export default Footer;