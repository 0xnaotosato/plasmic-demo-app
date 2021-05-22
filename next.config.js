
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['cY3F3wtpSnC2DKR5roXsFE'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  