const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#17A2B8',
              '@height-base': '42px',
              '@btn-font-weight': '500',
              '@link-color': '#17a2b8',
              '@success-color': '#52c41a',
              '@warning-color': '#faad14',
              '@error-color': '#da005f',
              '@font-size-base': '14px',
              '@heading-color': '#200e32',
              '@text-color': '#200e32 ',
              '@text-color-secondary': '#6e7177',
              '@disabled-color': '#95989e',
              '@border-radius-base': '8px',
              '@border-color-base': '#6f797f',
              '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
              '@layout-body-background': '#ffffff',
              '@layout-header-background': '#ffffff',
              '@layout-header-padding': '0 32px',
              '@layout-footer-padding': '24px 32px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
