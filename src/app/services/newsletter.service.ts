import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  private endpointUrl = 'https://bkjth47jt5e65avtdtqxespvmq0plgrz.lambda-url.us-east-2.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(name: string, email: string): Observable<NewsletterResponse> {
    const data = { name, email };
    console.log('Enviando para o servidor:', data)

    return this.http.post<NewsletterResponse>(this.endpointUrl, data);
  }
}
