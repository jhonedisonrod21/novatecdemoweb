import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable,Inject  } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RestDriver<ExchangeType>{
    
    constructor(private httpBaseUrl:String,private httpclient:HttpClient){ }

    getAll(headers?:HttpHeaders):Observable<ExchangeType[] | any>{
        return this.httpclient.get<ExchangeType[] | any>(`${this.httpBaseUrl}`,{headers:headers? headers:new HttpHeaders()})
    }

    getOne(id:number,headers?:HttpHeaders):Observable<ExchangeType | any>{
        return this.httpclient.get<ExchangeType[] | any>(`${this.httpBaseUrl}/${id}`,{headers:headers? headers:new HttpHeaders()})
    }

    post(object:ExchangeType,headers?:HttpHeaders): Observable<ExchangeType | any>{
        return this.httpclient.post<ExchangeType | any>(`${this.httpBaseUrl}`,object,{headers:headers? headers:new HttpHeaders()});
    }
    
    put(id:string,object:ExchangeType,headers?:HttpHeaders): Observable<ExchangeType | any>{
        return this.httpclient.put<ExchangeType | any>(`${this.httpBaseUrl}/${id}`,object,{headers:headers? headers:new HttpHeaders()})
    }

    delete(id:string,headers?:HttpHeaders): Observable<any>{
        return this.httpclient.delete<ExchangeType | any>(`${this.httpBaseUrl}/${id}`,{headers:headers? headers:new HttpHeaders()})
    }
}