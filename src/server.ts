import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

async function main() {
  try {
    await mongoose.connect(config.db_uri as string)
    app.listen(config.port, () => {})
    //eslint-disable-next-line no-console
    console.log('event 360 backend running on ', config.port)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('run error', error)
  }
}

main()
