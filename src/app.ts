import 'reflect-metadata';
import {
    createExpressServer,
    useContainer
} from 'routing-controllers';
import { Container } from 'typedi';
import { ExampleController } from './controllers/ExampleController';

useContainer(Container);

const expressApp = createExpressServer({
    routePrefix: '/api',
    cors: true,
    controllers: [ExampleController],
});

expressApp.listen(8000);

console.log('Server is up and running at port 8000');
