/** @type {import('tailwindcss').Config} */
module.exports = {
  /** 原本 2.0 的 purge 在 3.0 改成 content */
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#e9edf1',
        'add-todo-btn-bg': '#55b6f3',
      },
      gridTemplateColumns: {
        'fill-220': 'repeat(auto-fill, 220px)',
      },
    },   
  },
  plugins: [],
}

