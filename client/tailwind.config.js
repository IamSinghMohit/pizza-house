/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FE8D0D",
                primary_dark: "#e87e0d",
                white: "#FFFFFF",
                background: "#E5E5E5",
                primary_light: "#F8F4F0",
                secondary_background: "#f1f7eb",
                black: "#101010",
            },
            fontSize: {
                xs: "12px",
            },
            screens: {
                xs: "425px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            fontFamily: {
                inter: ["Inter"],
                oleo: ["Oleo Script"],
                poppins: ["Poppins"],
                roboto: ["Roboto"],
            },
            fontSize: {
                logo: "",
            },
        },
    },
    plugins: [],
};
