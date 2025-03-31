import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RoomComponent } from './components/room/room.component';
import { OmeComponent } from './components/ome/ome.component';
import { HealthcareChatbotComponent } from './components/healthcare-chatbot/healthcare-chatbot.component';
import { HealthCheckupComponent } from './components/health-checkup/health-checkup.component';
import { CancerScreeningComponent } from './pages/cancer-screening/cancer-screening.component';
import { DiabetesComponent } from './pages/diabetes/diabetes.component';
import { GeneralHealthComponent } from './pages/general-health/general-health.component';
import { PackageCardComponent } from './pages/package-card/package-card.component';
import { PreConceptionComponent } from './pages/pre-conception/pre-conception.component';
import { SeniorCitizenComponent } from './pages/senior-citizen/senior-citizen.component';
import { RecommendComponent } from './pages/recommend/recommend.component';
import { ServicesComponent } from './components/services/services.component';
// import { ChatComponent } from './components/chat/chat.component';


export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path:'login', component: LoginComponent},
    { path:'signup', component: SignupComponent},
    { path: 'home', component: HomeComponent, title: 'Home - Healthcare & Telemedicine' },
    { path:'about', component:AboutComponent},
    { path:'doctors', component: DoctorsComponent },
    { path:'appointment', component:AppointmentComponent},
    { path: 'room/:roomId', component: RoomComponent },
    { path: 'ome', component: OmeComponent},
    { path: 'chat' , component: HealthcareChatbotComponent},
    { path: 'health-checkup', component:HealthCheckupComponent},
    { path: 'cancer-screening' , component:CancerScreeningComponent},
    { path: 'diabetes', component: DiabetesComponent },
    { path: 'general-health', component: GeneralHealthComponent },
    { path: 'package-card', component: PackageCardComponent },
    { path: 'pre-conception', component: PreConceptionComponent },
    { path: 'senior-citizen', component: SeniorCitizenComponent },
    { path: 'recommended', component: RecommendComponent },
    { path: 'service', component: ServicesComponent }
];
