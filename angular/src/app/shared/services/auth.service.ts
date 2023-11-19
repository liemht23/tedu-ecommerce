import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestDto } from '../models/login-request.dto';
import { LoginResponseDto } from '../models/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/key.const';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private httpClient: HttpClient) {}

	public login(input: LoginRequestDto) : Observable<LoginResponseDto> {
		var body = {
			username: input.username,
			password: input.password,
			client_id: environment.oAuthConfig.clientId,
			client_secret: environment.oAuthConfig.dummyClientSecret,
			grant_type: 'password',
			scope: environment.oAuthConfig.scope
		};

		const data = Object.keys(body).map((key, index) => `${key}=${encodeURIComponent(body[key])}`).join('&');
		return this.httpClient.post<LoginResponseDto>(
			environment.oAuthConfig.issuer + 'connect/token',
			data, 
			{ headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
		);
	}

	public isAuthenticated(): boolean {
		return localStorage.getItem(ACCESS_TOKEN) != null;
	}

	public logout() {
		localStorage.removeItem(ACCESS_TOKEN);
		localStorage.removeItem(REFRESH_TOKEN);
	}
}