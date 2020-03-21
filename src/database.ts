import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config/config';

async function Connect() {
  try {
    const dbOptions: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    };
    await mongoose.connect(config.DB.URI, dbOptions);

    console.log('DB is connected');
  } catch (e) {
    console.error('DB connection error: ', e);
    process.exit(0);
  }
}
