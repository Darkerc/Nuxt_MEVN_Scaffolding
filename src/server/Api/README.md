# Routes

> Here is all the routes of express app

## Index

> Here is the route root scaffolding


## Usage

Index.ts is the config file with express 

Routes folder is the directory with express routes

Create a route with:

```typescript
// @ts-nocheck
import { Route } from '../index';

export default class Router1 extends Route {
  constructor() {
    super();
  }

  public async ExampleMethod(_req: Request, res: Response) {
    // @ts-ignore
    res.json({
      Code: 200,
      Message: 'Hello world from Route_Example',
    });
  }

  protected RouterRoutes(): void {
    this.Routes.post('/Example', this.ExampleMethod);
  }
}
```

* Extends your class with Route class and override RouterRoutes method
* Define all your routes inside RouterRoutes method
* Create custom methods for your routes 

> All your routes have a baseUrl "/api/" if you want change that go to index.ts an redifine

```typescript
import express from 'express';
import fileSystem from 'fs';
import path from 'path';

export class ApiRoutes {
  // === Initial config of all routes ===
  public InitialDir: string;
  // === Getting all routes files ===
  private routes: any[];

  constructor() {
    this.InitialDir = '/api/'; //baseUrl
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
```
