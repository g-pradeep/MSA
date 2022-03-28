import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, observable } from "rxjs";
@Injectable ({
    providedIn : 'root'
})

export class DataService {
    constructor(private http: HttpClient){}
    public TestData(data): Observable<any> {
        return this.http.post("https://7f06f9b8-82e3-48bc-a1cc-c72782b5ffcd.mock.pstmn.io/FormData",data)
    }
}