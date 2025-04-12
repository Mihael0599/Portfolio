import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './main-page/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './main-page/imprint/imprint.component';

export const routes: Routes = [
    { path: "", component: MainPageComponent },
    { path: "privacyPolicy", component: PrivacyPolicyComponent },
    { path: "imprint", component: ImprintComponent }
];
