import { JsonController, Post, Body } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController()
export class ExampleController {
    constructor() {}

    // @Post('/exampleHello')
    // getOne(@Body() body: Example.Request): Example.Response {
    //     return {
    //         status: status,
    //         reason: reason,
    //         success: success,
    //     };
    // }
    //
    // @Post('/exampleBye')
    // getOne(@Body() body: Example.Request): Example.Response {
    //     return {
    //         status: status,
    //         reason: reason,
    //         success: success,
    //     };
    // }
}
