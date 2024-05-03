import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRepository } from './core/repositories/user.repository';
import { UserRepositoryImpl } from './infrastructure/repositories/user.repository.impl';
import { SharedModule } from './presentation/shared/shared.module';
import { UserModule } from './presentation/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    SharedModule,
  ],
  providers: [{ provide: UserRepository, useClass: UserRepositoryImpl }],
  bootstrap: [AppComponent],
})
export class AppModule {}
