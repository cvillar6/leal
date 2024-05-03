import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRepository } from './core/repositories/auth.repository';
import { UserRepository } from './core/repositories/user.repository';
import { AuthRepositoryImpl } from './infrastructure/repositories/auth.repository.impl';
import { UserRepositoryImpl } from './infrastructure/repositories/user.repository.impl';
import { AuthModule } from './presentation/auth/auth.module';
import { UserModule } from './presentation/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    { provide: UserRepository, useClass: UserRepositoryImpl },
    { provide: AuthRepository, useClass: AuthRepositoryImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
