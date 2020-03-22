const {colors, fontSize} = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        container: {
            center: true
        },
        extend: {
            fontSize: {
                ...fontSize,
                'ty': '.5rem'
            },
            colors: {
                blue: {
                    ...colors.blue,
                    '700': '#014aa4'
                }
            }
        },
        textShadow: {
            'default': '0 2px 5px rgba(0, 0, 0, 0.3)',
            'lg': '0 2px 10px rgba(0, 0, 0, 0.3)'
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus']
    },
    plugins: [
        require('tailwindcss-typography')()
    ]
}
