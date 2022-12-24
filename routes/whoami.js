const router = require('express').Router();

const headerParser = (headers) => {
  const host = headers.host;
  const lang = headers['accept-language'];
  const software = headers['sec-ch-ua-platform'];

  return {
    ipaddress: host,
    language: lang,
    software,
  };
};

router.get('/', (req, res) => res.json(headerParser(req.headers)));

exports.whoamiRouter = router;
