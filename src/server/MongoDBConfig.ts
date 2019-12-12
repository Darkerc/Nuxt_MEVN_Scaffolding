import consola from 'consola';
import mongoose from 'mongoose';
import { mongo } from '../../nuxt.config.js';

export default async function initConnection() {
  try {
    await mongoose.connect(mongo.URL_BBDD, mongo.options);
    consola.success({
      message: 'Connection with MongoDB success',
      badge: true,
    });
  } catch (e) {
    consola.error({
      message: 'Something go wrong!!',
      badge: true,
    });
    consola.error({
      message: e,
    });
  }
}
