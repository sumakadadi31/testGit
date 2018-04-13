import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes = [
    {
        /* no leading slash - use 'about' and NOT '/about' */
        path: 'about', component: AboutComponent
    },
    {
        path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackModule'
    },
    {
        path: '', redirectTo: '/about', pathMatch: "full"
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];