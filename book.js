module.exports = {
  title: 'scuttlebutt modules',
  author: 'mixmix',
  gitbook: '^3.2.3',
  plugins: [
    'theme-official@2.1.1',
    '-sharing',
    '-fontsettings',
    'anchors',
    'prism',
    '-highlight',
    'sitemap'
  ],
  pluginsConfig: {
    'theme-default': {
      'showLevel': false
    },
    sitemap: {
      hostname: 'https://modules.scuttlebutt.nz'
    }
  }
}
