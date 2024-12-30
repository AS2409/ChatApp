/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Existing Neo Mint and Monochrome
        nearWhite: '#F6F6F6',
        deepGray: '#333333',
        neoMint: '#B8F2E6',
        mediumGray: '#666666',

        // Cyberpunk Glow (Primary Set)
        cyberNavy: '#0D1117',
        brightWhite: '#F2F2F2',
        neonCyan: '#00FFFF',
        neonMagenta: '#FF00FF',
        lavenderBlue: '#9BA9FF',
        electricLime: '#39FF14',
        glowingYellow: '#FFD700',
        cyberPink: '#FF007F',
        deepPurple: '#4B0082',
        darkTeal: '#014F43',

        // Cyberpunk New Additions (Vibrant Glows)
        cyberNight: '#1a1a2e',
        neonAzure: '#3d5afe',
        hotOrange: '#ff5722',
        radiantPink: '#ff006e',
        aquaCyan: '#00f5d4',
        amberGlow: '#ff8800',
        coralNeon: '#ff6f61',
        neonViolet: '#6a0572',

        // Other Gradient-Friendly Colors
        purpleIndigo: '#8E2DE2',
        deepIndigo: '#4A00E0',
        coralOrange: '#FF6F61',

        // High Contrast Modern
        deepBlack: '#121212',
        hotPink: '#FF4081',
        electricBlue: '#448AFF',
        coolGrayModern: '#9E9E9E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        firaSans: ['Fira Sans', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
