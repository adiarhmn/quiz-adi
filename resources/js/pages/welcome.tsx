import { Head } from '@inertiajs/react';
import Navigations from '@/components/navigations/navigations';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <Navigations />

            {/* Hero Section */}
            <section>
                <div className="relative overflow-hidden py-30 text-center">
                    <div className="absolute top-1/2 left-1/2 -z-1 aspect-square w-200 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-700/10"></div>
                    <div className="absolute top-1/2 left-1/2 -z-1 aspect-square w-150 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-500/10"></div>
                    <div className="absolute top-1/2 left-1/2 -z-1 aspect-square w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-300/10"></div>
                    <div className="m-auto max-w-4xl">
                        <p className="mb-4 font-semibold tracking-wide text-orange-600">Quiz Sine - Start Your Assessment</p>
                        <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
                            Comprehensive Quiz and Assessment Platform for Organizations
                        </h1>
                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            Empower your organization with our robust quiz and assessment platform, designed to streamline evaluation processes
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700">
                                Start Quiz
                            </button>
                            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-100">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Stats Section */}
            <section className="bg-gray-50">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 text-center md:grid-cols-4">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
                        <p className="mt-2 text-gray-600">Active Participants</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                        <p className="mt-2 text-gray-600">Organizations</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
                        <p className="mt-2 text-gray-600">Assessments Conducted</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">99.9%</h3>
                        <p className="mt-2 text-gray-600">System Availability</p>
                    </div>
                </div>
            </section>


            <footer className="bg-gray-900 text-gray-400">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <div className="grid gap-10 md:grid-cols-3">
                        {/* Brand */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold text-white">Quiz Sine</h3>
                            <p className="text-sm leading-relaxed">
                                A simple web-based quiz application built to demonstrate structured question management, timed sessions, and automatic
                                scoring functionality.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="mb-3 text-sm font-medium tracking-wide text-white uppercase">Navigation</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="transition hover:text-white">
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="mb-3 text-sm font-medium tracking-wide text-white uppercase">Tech Stack</h4>
                            <ul className="space-y-2 text-sm">
                                <li>React</li>
                                <li>Tailwind CSS</li>
                                <li>Laravel API</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-800 pt-6 text-sm md:flex-row">
                        <p>© {new Date().getFullYear()} Quiz Sine. All rights reserved.</p>
                        <p className="mt-3 md:mt-0">
                            Created by <span className="font-medium text-white">Adi Aulia Rahman</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
