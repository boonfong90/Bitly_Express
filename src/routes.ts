import {TestController} from "./controller/TestController";

export const Routes = [{
    method: "get",
    route: "/bit.ly/urls",
    controller: TestController,
    action: "showAllURL"
},
{
    method: "get",
    route: "/bit.ly/urls/:id",
    controller: TestController,
    action: "showURL"
},
{
    method: "post",
    route: "/bit.ly/urls",
    controller: TestController,
    action: "postURL"
}];