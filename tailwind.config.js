module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#37CDBE",
          secondary: "#3ABFF8",
          accent: "#37cdbe",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
