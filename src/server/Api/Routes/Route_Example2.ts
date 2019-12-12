// @ts-nocheck
import ExampleModel from '../../../models/ExampleModel';
import { Route } from '../index';

export default class Router2 extends Route {
  constructor() {
    super();
  }

  public async ExampleMethod(_req: Request, res: Response) {
    try {
      const Model = await ExampleModel.create({
        name: 'Example Name',
      });
      res.json({
        Code: 200,
        Message: 'Name created',
        Model,
      });
    } catch (error) {
      res.json({
        Code: 500,
        Message: 'Something go wrong!!',
        Error: error,
      });
    }
  }

  protected RouterRoutes(): void {
    this.Routes.post('/Example2', this.ExampleMethod);
  }
}
