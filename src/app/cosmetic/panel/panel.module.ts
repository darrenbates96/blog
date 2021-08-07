import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.component';

import { PanelComponent } from './panel.component';
import { BirdsEyeViewPageComponent } from './pages/birds-eye-view-page/birds-eye-view-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BirdsEyeViewProblemComponent } from './components/birds-eye-view-problem/birds-eye-view-problem.component';

@NgModule({
	declarations: [
		PanelComponent,
		BirdsEyeViewPageComponent,
		AboutPageComponent,
		ContactPageComponent,
		NavigationBarComponent,
  BirdsEyeViewProblemComponent,
	],
	imports: [CommonModule, PanelRoutingModule, LoadingSpinnerModule],
})
export class PanelModule {}
