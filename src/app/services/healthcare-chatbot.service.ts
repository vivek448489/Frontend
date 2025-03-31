// healthcare-chatbot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthcareChatbotService {
  private apiUrl = 'https://localhost:7028/api/chat/ask'; // This will be your .NET API endpoint

  constructor(private http: HttpClient) { }

  sendMessage(userMessage: string): Observable<any> {
    console.log('Sending message to chatbot:', userMessage);
    return this.http.post<any>(this.apiUrl, { message: userMessage });
  }

  analyzeSymptoms(symptoms: string): Observable<any> {
    return this.http.post<any>('https://localhost:7028/api/chat/analyze-symptoms', { symptoms });
  }
  
}

