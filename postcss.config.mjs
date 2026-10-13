const config = {
  theme: {
    extend: {
      colors: {
        purple: {
          100: "var(--purple-100)",
          600: "var(--purple-600)",
          950: "var(--purple-950)",
        },
      },
      spacing: {
        size: "var(--size)",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
