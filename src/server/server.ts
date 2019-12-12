// @ts-ignore
import consola from 'consola';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
// @ts-ignore
import { Builder, Nuxt } from 'nuxt';
import { ApiRoutes } from './Api/index';
import MongoDBConfig from './MongoDBConfig';

export default class NuxtExpressServer {
  private app: express.Application;
  private host: string;
  private port: number;
  private routes: express.Router[];
  private ApiRoutes: ApiRoutes;

  constructor() {
    this.app = express();
    this.ApiRoutes = new ApiRoutes();
    this.routes = this.ApiRoutes.getRoutes();
    this.host = process.env.HOST || 'localhost';
    this.port = Number(process.env.PORT) || 3000;
  }

  public start(): void {
    // Import and Set Nuxt.js options
    const config = require('../../nuxt.config.js');
    config.dev = !(process.env.NODE_ENV === 'production');

    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
      const builder = new Builder(nuxt);
      builder.build();
    }

    // Loading routes from Routes folder
    this.loadRoutes();

    // Connecting with mongoDb server
    MongoDBConfig();

    // Give nuxt middleware to express
    this.app.use(nuxt.render);
    this.app.use(morgan('tiny'));
    this.app.use(cors());
    this.app.use(express.json());

    // Listen the server
    this.app.listen(this.port, this.host);
    consola.ready(`Server listening on http://${this.host}:${this.port}`);
  }

  private loadRoutes(): void {
    this.routes.forEach((route: any) => {
      const RouteClass = new route.default();
      this.app.use(this.ApiRoutes.InitialDir, RouteClass.getRoutes());
    });
  }
}
