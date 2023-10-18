const up = require('./index.js');

const e = up.onExit;
e.onExit = up.onExit;
e.load = up.load;
e.unload = up.unload;
// Old API
e.signals = () => { return up.signals };

module.exports = e;
