import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        customVariables: ['~/assets/variables.scss'],
        breakpoint: {
            thresholds: {
                xs: 340,
                sm: 579,
                md: 820,
            },
            mobileBreakpoint: 578,
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: '#4EC690',
                        light: '#EDF5F1',
                        dark: '#2DB479',
                        info: '#1976D2',
                        mainInfo: "#2196F3",
                        success:'#4CAF50',
                        grey:'#B6C4C1',
                    }
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})