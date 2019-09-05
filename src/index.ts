import * as express from "express";
import * as bodyParser from  "body-parser";
import {NextFunction, Request, Response} from "express";
import { Routes } from "./routes";
import * as cors from 'cors'

export const storage = {
    urls: [
        {
            "id": 1,
            "url": "https://gitpitch.com/mingxiangchan/dell-slides/express-1#/16"
        },
        {
            "id": 2,
            "url": "https://app.slack.com/client/TH6HDU98A/GLBL0UK3K"
        }
    ]
}

export const srcPath = __dirname
const PORT = process.env.PORT || 3000;

// create and setup express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '\\public'));
app.use(cors())

// register routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

// start express server
app.listen(PORT);