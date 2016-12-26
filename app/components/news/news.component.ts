import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'news',
  styleUrls: ['news.css'],
  providers: [NewsService],
  templateUrl: 'news.html',
})
export class NewsComponent implements OnInit  { 
	
	public articles : any;
	public showGif : boolean;
	constructor(private _NewsService: NewsService) {
		//this._NewsService.TestMethod().subscribe( news => console.log("Constructor News=> ", news));
	}

	getnews() {
		return this._NewsService.TestMethod();
	}

	title = 'News'; 

	ngOnInit(): void {
    	//console.log("=> ", this.getnews());
		this.showGif = true;
		this._NewsService.TestMethod().subscribe( news => { 			
				this. articles = news.articles;
				this.showGif = false;
		});
		//this. articles = 'Swapnesh';
  	}
}
