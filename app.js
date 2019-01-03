const AV = require('./libs/av-weapp-min.js');

AV.init({
  appId: 'UV5HLQF1BoPkxt7MKHSANLy4-gzGzoHsz',
  appKey: 'AGWbe4iAkHQnrufbYkOd4Dki',
});

//app.js
App({
  AV: AV,
});