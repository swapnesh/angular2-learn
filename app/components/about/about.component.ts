import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	moduleId: module.id,
  	selector: 'about',
  	//encapsulation: ViewEncapsulation.Native,
  	styleUrls: ['about.css'],
  	templateUrl: 'about.html',
})
export class AboutComponent  { title = 'About'; }