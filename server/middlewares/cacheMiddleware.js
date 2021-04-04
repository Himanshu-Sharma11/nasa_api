import NodeCache from 'node-cache';

const cache = new NodeCache();

export default (duration) => (req, res, next) => {
  const key = req.originalUrl;
  console.log(key);
  const cacheRes = cache.get(key);

  if (cacheRes) {
    console.log(`cache hit for ${key}`);
    res.send(cacheRes);
  } else {
    console.log(`cache miss for ${key}`);
    res.originalSend = res.send;
    res.send = (body) => {
      cache.set(key, body, duration);
      res.originalSend(body);
    };
    next();
  }
};
