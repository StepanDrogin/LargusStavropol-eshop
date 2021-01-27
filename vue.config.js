module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/styles/variables.scss";`,
            },
        },
    },

    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/chevrolet',
          '/daewoo',
          '/lada',
          '/cart'
        ],
        useRenderEvent: true,
        headless: true,
        onlyProduction: true
      }
    }
};
