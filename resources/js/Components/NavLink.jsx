import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-sm text-white font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? ''
                    : 'border-transparent') +
                className
            }
        >
            {children}
        </Link>
    );
}
