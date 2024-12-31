const requestLogger = (req, res, next) => {
    const date = new Date();
    console.log(`[${date.toISOString()}] ${req.method} ${req.path}`);
    next(); 
  };
  
  module.exports = requestLogger;