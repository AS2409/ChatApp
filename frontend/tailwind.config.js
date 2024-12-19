// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Minimalist Dark Mode
        darkSlate: '#1E1E2C',
        softWhite: '#E0E0E0',
        mutedGrayBlue: '#A1A1B1',

        // Neo Mint and Monochrome
        nearWhite: '#F6F6F6',
        deepGray: '#333333',
        neoMint: '#B8F2E6',
        mediumGray: '#666666',

        // Cyberpunk Glow
        cyberNavy: '#0D1117',
        brightWhite: '#F2F2F2',
        neonCyan: '#00FFFF',
        neonMagenta: '#FF00FF',
        lavenderBlue: '#9BA9FF',

        // Earthy Tones
        creamWhite: '#FDFCFB',
        charcoal: '#2A2B2A',
        sageGreen: '#A3BE8C',
        clayOrange: '#D08770',
        coolGray: '#6A6B6A',

        // Modern Gradient Vibes
        purpleIndigo: '#8E2DE2',
        deepIndigo: '#4A00E0',
        coralOrange: '#FF6F61',

        // Pastel Dreams
        softPeach: '#FFF1F0',
        mutedCharcoal: '#4B5563',
        lightBlue: '#93C5FD',


        // Oceanic Calm
        paleAqua: '#E0F7FA',
        oceanBlue: '#263238',
        brightTeal: '#00ACC1',
        lightTeal: '#4DD0E1',
        mutedBlueGray: '#546E7A',
        
        // Futuristic Gradient & Glass
        softDark: '#202020',
        darkerGray: '#333333',
        brightBlue: '#4B9EFF',
        
        // Warm and Inviting
        softCream: '#FFFBF2',
        richBrown: '#3E2723',
        warmPeach: '#FBE9E7',
        softOrange: '#FFD180',
        mutedBrown: '#5D4037',
        
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

