import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApolosService {
  private apiKey = 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // 🔑 Mets ta clé OpenAI ici
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  getReponses(prompt: string): Observable<string[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      model: 'gpt-4', // ou 'gpt-3.5-turbo'
      messages: [{ role: 'user', content: prompt }],
      n: 3,
      max_tokens: 150,
      temperature: 0.8
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(res => res.choices.map((c: any) => c.message.content.trim()))
    );
  }
}
