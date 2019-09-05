import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class TestController {
    async showAllURL(request: Request, response: Response, next: NextFunction) {
        response.json(storage.urls)
    }

    async showURL(request: Request, response: Response, next: NextFunction) {
        let url = {}

        for(let u of storage.urls){
            if(u.id === parseInt(request.params.id)){
                url = u
                break
            }
        }
        response.json(url)
    }

    async postURL(request: Request, response: Response, next: NextFunction) {
        const data = request.body
        
        storage.urls.push({
            id: storage.urls.length + 1,
            url: data.url
        })

        response.sendStatus(201)
    }
}