import { Link } from '@inertiajs/react';
import { IconWaveSine } from '@tabler/icons-react';

export default function Navigations() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-1">
                        <IconWaveSine className="h-8 w-8 text-orange-600" />
                        <span className="text-xl font-bold tracking-tight text-gray-900">QuizSine</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden items-center space-x-8 text-sm font-medium text-gray-700 md:flex">
                        <a href="#" className="transition hover:text-orange-600">
                            Home
                        </a>
                        <a href="#" className="transition hover:text-orange-600">
                            Features
                        </a>
                        <a href="#" className="transition hover:text-orange-600">
                            Top Rank
                        </a>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <Link href="/start-quiz" className="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition hover:bg-orange-700">
                            Start Quiz
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
