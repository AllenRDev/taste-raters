import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${
                active
                    ? 'border-gray-400 text-slate-800 bg-transparent focus:text-gray-800 focus:bg-indigo-100 focus:border-gray-700/50'
                    : 'border-transparent text-slate-400 hover:text-slate-800 hover:bg-gray-50 hover:border-slate-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
