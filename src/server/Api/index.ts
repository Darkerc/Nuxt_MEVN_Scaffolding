// @ts-nocheck
import express from 'express';
import fileSystem from 'fs';
import path from 'path';

export class ApiRoutes {
  // === Initial config of all routes ===
  public InitialDir: string;
  // === Getting all routes files ===
  private routes: any[];

  constructor() {
    this.InitialDir = '/api/';
    this.routes = [];
  }

  public getRoutes(): any {
    const normalizedPath = path.join(__dirname, 'Routes');
    fileSystem.readdirSync(normalizedPath).forEach((file: any) => {
      this.routes.push(require('./Routes/' + file));
    });
    return this.routes;
  }
}

export class Route {
  protected Routes: express.Router;

  constructor() {
    this.Routes = express.Router();
    this.RouterRoutes();
  }

  protected RouterRoutes(): void {}

  protected getRoutes(): express.Router {
    return this.Routes;
  }
}
