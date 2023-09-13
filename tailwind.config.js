import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                'green': '#709C5A', // Replace with your desired color code
                'green-hover': '#6D8E5C', // Replace with the darker color code for hover
              },
              textColor: {
                'green': '#709C5A', // Replace with your desired color code
              },
        },
    },

    plugins: [  function ({ addVariant, e }) {
        addVariant('hover', ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`hover${separator}${className}`)}:hover`;
          });
        });
    }
    ],
};
