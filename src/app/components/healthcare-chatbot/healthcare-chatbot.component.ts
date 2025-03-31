// healthcare-chatbot.component.ts
import { Component, type OnInit, ViewChild, type ElementRef, type AfterViewChecked } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { HealthcareChatbotService } from "../../services/healthcare-chatbot.service";
interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

@Component({
  selector: 'app-healthcare-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './healthcare-chatbot.component.html',
  styleUrl: './healthcare-chatbot.component.css'
})
export class HealthcareChatbotComponent {
  messages: Message[] = []
  newMessage = ""
  isOnline = true
  isLoading = false

  @ViewChild("messagesContainer") private messagesContainer!: ElementRef

  constructor(private chatbotService: HealthcareChatbotService) {}

  ngOnInit(): void {
    // Add initial welcome message
    setTimeout(() => {
      this.addBotMessage("Hello! I'm your healthcare assistant. How can I help you today?")
    }, 500)
  }

  ngAfterViewChecked() {
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight
    } catch (err) {}
  }

  sendMessage(): void {
    if (this.newMessage.trim() === '') return;
  
    // Add user message to chat
    this.addUserMessage(this.newMessage);
    const userMessage = this.newMessage;
    this.newMessage = '';
    this.isLoading = true;
  
    // Call API
    this.chatbotService.sendMessage(userMessage).subscribe({
      next: (response) => {
        const botReply = response.choices[0].message.content;  // Extract AI response
        this.addBotMessage(botReply);
        this.isLoading = false;
      },
      error: (error) => {
        this.addBotMessage("Sorry, I'm having trouble connecting to the service. Please try again later.");
        console.error('Error calling chatbot API:', error);
        this.isLoading = false;
      }
    });
  }
  
  analyzeSymptoms() {
    if (this.newMessage.trim() === "") return;
  
    const userSymptoms = this.newMessage;
    this.newMessage = "";
    this.isLoading = true;
  
    this.chatbotService.analyzeSymptoms(userSymptoms).subscribe({
      next: (response) => {
        this.addBotMessage(`Severity Score: ${response.severity} \n Recommended Doctor: ${response.doctor}`);
        this.isLoading = false;
      },
      error: (error) => {
        this.addBotMessage("Error analyzing symptoms. Please try again.");
        console.error("Symptom analysis error:", error);
        this.isLoading = false;
      },
    });
  }
  

  private addUserMessage(text: string): void {
    this.messages = [
      ...this.messages,
      {
        id: this.generateId(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]
  }

  private addBotMessage(text: string): void {
    this.messages = [
      ...this.messages,
      {
        id: this.generateId(),
        text,
        sender: "bot",
        timestamp: new Date(),
      },
    ]
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 11)
  }

  formatTime(timestamp: Date): string {
    return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }
}