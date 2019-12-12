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
