Package.describe({
  name: 'whytobe:uiload',
  version: '0.0.4',
  summary: 'A package for loading ui. Fork from osrio:uiblocker for none scss/coffee',
  git: 'https://github.com/whytobe/uiload',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['reactive-var', 'templating', 'mquandalle:jade@0.4.3'], 'client')
  api.addFiles(['client/blockr.jade', 'client/blockr.js', 'client/blockr.less'], 'client');
});
