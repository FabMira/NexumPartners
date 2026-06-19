/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./nosotros.html", "./areas-practica.html", "./contacto.html"],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#ffdea5",
        "tertiary": "#1f1300",
        "on-primary-fixed-variant": "#38485a",
        "on-secondary-container": "#586377",
        "surface-tint": "#4f6073",
        "primary": "#041627",
        "on-tertiary-container": "#af8c47",
        "surface": "#f8f9fa",
        "outline-variant": "#c4c6cd",
        "on-primary-fixed": "#0b1d2d",
        "inverse-on-surface": "#f0f1f2",
        "outline": "#74777d",
        "secondary-container": "#d5e0f7",
        "on-tertiary-fixed": "#261900",
        "on-secondary-fixed-variant": "#3c475a",
        "secondary": "#545f72",
        "on-error-container": "#93000a",
        "surface-variant": "#e1e3e4",
        "secondary-fixed": "#d8e3fa",
        "on-secondary-fixed": "#111c2c",
        "error-container": "#ffdad6",
        "surface-bright": "#f8f9fa",
        "inverse-primary": "#b7c8de",
        "surface-dim": "#d9dadb",
        "on-error": "#ffffff",
        "primary-fixed": "#d2e4fb",
        "on-surface-variant": "#44474c",
        "inverse-surface": "#2e3132",
        "background": "#f8f9fa",
        "secondary-fixed-dim": "#bcc7dd",
        "on-secondary": "#ffffff",
        "on-primary": "#ffffff",
        "primary-container": "#1a2b3c",
        "primary-fixed-dim": "#b7c8de",
        "on-tertiary-fixed-variant": "#5d4201",
        "on-background": "#191c1d",
        "surface-container-low": "#f3f4f5",
        "on-primary-container": "#8192a7",
        "error": "#ba1a1a",
        "surface-container": "#edeeef",
        "on-tertiary": "#ffffff",
        "tertiary-fixed-dim": "#e9c176",
        "tertiary-container": "#392700",
        "surface-container-highest": "#e1e3e4",
        "surface-container-high": "#e7e8e9",
        "on-surface": "#191c1d",
        "surface-container-lowest": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-tablet": "32px",
        unit: "8px",
        gutter: "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "container-max-width": "1280px"
      },
      fontFamily: {
        "body-lg": ["Manrope"],
        "headline-md": ["EB Garamond"],
        "headline-lg-mobile": ["EB Garamond"],
        "body-md": ["Manrope"],
        "label-sm": ["Manrope"],
        "headline-lg": ["EB Garamond"],
        "display-lg": ["EB Garamond"],
        "label-md": ["Manrope"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.2", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "500" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
