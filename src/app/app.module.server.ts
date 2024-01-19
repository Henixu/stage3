import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    AppModule,
    ServerModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
