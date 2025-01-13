import dotenv from 'dotenv'
import path from 'path'

const envPath = path.join(__dirname, '..', '..', '.env')
dotenv.config({ path: envPath, override: true })

export * from './Interface'
export * from './utils'
export * from './speechToText'
export * from './storageUtils'
export * from './handler'
export * from './followUpPrompts'

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.FLOWISE_API_KEY) {
    return res.status(403).send('Unauthorized Access');
  }
  next();
};

app.use(apiKeyMiddleware);
