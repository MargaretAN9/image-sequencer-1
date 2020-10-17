const testModule = require('../templates/module-test'),
  benchmark = 'data:image/png;base64,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',
  _benchmark = 'data:image/png;base64,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',
  image = require('../images/IS-QR'),
  options = {
    exposure: 3
  },
  _options = {
    exposure: 4
  };

require('../templates/options-test')('exposure', [options, _options], [benchmark, _benchmark], image);

testModule('exposure', options, benchmark, image);