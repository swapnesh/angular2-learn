import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

//import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

	private apiKey: string;
	private newsUrl : string;
	constructor(private _http: Http) {
		this.apiKey = '47a0f1ad007f4c53a754c4bf48e94d50';
		this.newsUrl = 'https://newsapi.org/v1/';
	}

	TestMethod() {
		let source: string = 'techcrunch';
		const URL = this.newsUrl + 'articles?source='+ source +'&apiKey='+ this.apiKey + '&sortBy=latest';
		return this._http.get(URL)
					.map(res => res.json())
		//return 'Service Working';
	}
}
