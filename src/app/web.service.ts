import { Http } from '@angular/http';
import { Injectable } from '@angular/core'; // injectable for webservice
import 'rxjs/add/operator/toPromise';
import { MatSnackBar } from '@angular/material';

@Injectable() // decorater for injectable
export class WebService {
    BASE_URL = 'http://localhost:56110/api1';

    messages = [];

    constructor(private http: Http, private sb : MatSnackBar) {
        this.getMessage();
    }

    async getMessage(){
        try {
            var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError("Unable to get messages");
        }
    }
        

    async postMessage(message){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post messages");
        }
        
    }

    private handleError(error) {
        console.error();
        this.sb.open(error, 'close', {duration: 2000});
    }
}