import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'my-app',
  template: `
	<nav class="navbar navbar-inverse navbar-fixed-top">
	  <div class="container">
	    <div class="navbar-header">
	      <!--<a class="navbar-brand" href="#">Website using Angular2</a>-->
	      <a routerLink="">
	      	<img class="logo-image" src="http://assets.publicis.sapient.com/content/dam/publicis-sapient/images/ps-logo.png" />
	      </a>
	    </div>
	    <ul class="nav navbar-nav navbar-right">
	     	<li><a routerLink="" routerLinkActive="active">Home</a></li>
			<li><a routerLink="/about" routerLinkActive="active">About</a></li>
			<li><a routerLink="/ideas" routerLinkActive="active">Ideas</a></li>
			<li><a routerLink="/cases" routerLinkActive="active">Cases</a></li>
			<li><a routerLink="/news" routerLinkActive="active">News</a></li>
			<li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
	    </ul>
	  </div>
	</nav>
	<div class="container theme-showcase" role="main">
		<router-outlet></router-outlet>
	</div>	
  	`,
  	styles: ['.logo-image { padding-top: 10px; }']
})
export class AppComponent  { name = 'Angular2 Routing';
	constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

 }
