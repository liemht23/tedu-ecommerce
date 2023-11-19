import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class NotificationService {
	constructor(private messageService: MessageService) {}

	showSuccess(message: string) {
		this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
	}

	showError(message: string) {
		this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
	}
}