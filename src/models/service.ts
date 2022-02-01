import { IMovie } from "../models/Iservice";


export class Service implements IMovie {

    title: string;

    constructor(title:string) {
        this.title = title;
    }

    getData() {
        return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9a5cc6b6&s=" + this.title + "&type=movie")
        .then(response => response.json())
        .then(data => {
    
            return data;
        });
    }
}

