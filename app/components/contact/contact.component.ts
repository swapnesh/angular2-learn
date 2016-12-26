import { Component } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './user';
@Component({
  moduleId: module.id,
  selector: 'contact',
	styleUrls: ['contact.css'],
  templateUrl: 'contact.html',
})
export class ContactComponent  { 
	title = 'Contact'; 
	countries = ['India', 'United States of America', 'United Kingdom', 'France'];
	model = {};

	constructor(public toastr: ToastsManager) {}

	formSubmit(model: any) {
		console.log(model);
		if(model.name)
			this.toastr.success(model.name + ' , thanks for contacting, we will get back to you soon', 'Success!');
		else
			this.toastr.error('Something went wrong', 'Error :(');
	}
}
