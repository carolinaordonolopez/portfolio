import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPages = [
		{ title: 'Información personal', url: '/folder/Inbox', icon: 'mail' },
		{ title: 'Experiencia profesional', url: '/folder/Outbox', icon: 'paper-plane' },
		{ title: 'Proyectos', url: '/folder/Favorites', icon: 'heart' },
		{ title: 'Formación académica', url: '/folder/Archived', icon: 'archive' },
		{ title: 'Formación complementaria', url: '/folder/Trash', icon: 'trash' },
		{ title: 'Idiomas', url: '/folder/Spam', icon: 'warning' },
		{ title: 'Otros datos de interés', url: '/folder/Spam', icon: 'warning' },
	];
	// public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
	// constructor() { }
}
