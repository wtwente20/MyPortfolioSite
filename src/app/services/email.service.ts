import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private functionUrl = 'https://console.firebase.google.com/project/westley-twente-portfolio-site/overview';

  constructor(private http: HttpClient) { }

  sendEmail(email: string, name: string, subject: string, message: string) {
    const body = {
      email,
      name,
      subject,
      message
    };

    return this.http.post(this.functionUrl, body);
  }
}

