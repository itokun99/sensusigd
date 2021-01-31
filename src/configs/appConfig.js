/**
 * app initial info
 */
const appInfo = {
  name: 'Sensus IGD',
  version: '1.0.0',
  author: 'Indrawan Lisanto',
  develoment: true
};

/**
 * app initial environment
 */
const appEnvironment = {
  api: {
    baseUrl: 'https://laporan.vklaim.com'
  }
};

/**
 * app initial active config
 */
const appActiveConfig = appEnvironment;

export { appInfo, appEnvironment, appActiveConfig };
