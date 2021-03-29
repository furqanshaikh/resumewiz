import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ResumewizSharedModule } from 'app/shared/shared.module';
import { ResumewizCoreModule } from 'app/core/core.module';
import { ResumewizAppRoutingModule } from './app-routing.module';
import { ResumewizHomeModule } from './home/home.module';
import { ResumewizEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ResumewizSharedModule,
    ResumewizCoreModule,
    ResumewizHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ResumewizEntityModule,
    ResumewizAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ResumewizAppModule {}
