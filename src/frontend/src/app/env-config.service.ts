import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

export interface EnvConfig {
    apiUrl: string;
    isRealStorageEnabled: boolean
}

@Injectable({
    providedIn: 'root'
})
export class EnvConfigService {
    private apiUrlSubject$: ReplaySubject<string> = new ReplaySubject<string>(1);
    constructor(private _httpClient: HttpClient) {
        
    }

    public init() {
        this._httpClient.get("env.json").subscribe((data: EnvConfig) => {
            this.apiUrlSubject$.next(data.apiUrl);
        });
    }

    public getApiUrl$(): Observable<string>{
        return this.apiUrlSubject$.asObservable();
    }

    // private isConfigReadySubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // private config: EnvConfig;

    // constructor(private httpClient: HttpClient) {

    // }

    // public init() {
    //     this.getData()
    // }

    // private getData() {
    //     this.httpClient.get("env.json").subscribe((data: EnvConfig) => {
    //         this.parseBooleans(data);
    //         this.config = data;
    //         this.isConfigReadySubject$.next(true);
    //     });
    // }

    // private parseBooleans(data: EnvConfig) {
    //     data.isRealStorageEnabled = this.parseBoolean(data.isRealStorageEnabled)
    // }

    // private parseBoolean(dataItem: any): boolean {
    //     if (dataItem === true) {
    //         return true;
    //     }

    //     if(typeof dataItem == "string")
    //     {
    //         if (dataItem.toLowerCase() === "true")
    //         {
    //             return true;
    //         }
    //     }


    //     return false;
    // }

    // public getConfig(): EnvConfig {
    //     return this.config;
    // }

    // public isConfigReady$(): Observable<boolean> {
    //     return this.isConfigReadySubject$.asObservable();
    // }
}
