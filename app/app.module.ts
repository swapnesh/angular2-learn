import { RouterModule, Routes } from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent }  from './app.component';

import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { IdeasComponent }  from './components/ideas/ideas.component';
import { CasesComponent }  from './components/cases/cases.component';
import { NewsComponent }  from './components/news/news.component';
import { ContactComponent }  from './components/contact/contact.component';
import { PageNotFoundComponent }  from './components/pagenotfound/pagenotfound.component';
import { FooterComponent }  from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    ToastModule,
  	RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  	HomeComponent,
  	AboutComponent,
  	IdeasComponent,
  	CasesComponent,
  	NewsComponent,
  	ContactComponent,
  	PageNotFoundComponent,
    FooterComponent,
  	AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
