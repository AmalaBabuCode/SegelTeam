import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HeadlineCardsComponent } from './headline-cards/headline-cards.component';
import { HeadlineComponent } from './headline/headline.component';
import { TeamComponent } from './team/team.component';
import { TeamMemberComponent } from './team/team-member/team-member.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeadlineCardsComponent,
    HeadlineComponent,
    TeamComponent,
    TeamMemberComponent,
    NewDialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewDialogComponent],
})
export class AppModule {}
