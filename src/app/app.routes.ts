import { Routes, RouterModule } from "@angular/router";
import { RocketlistComponent } from "./components/rocketlist/rocketlist.component";
import { RocketComponent } from "./components/rocket/rocket.component";
import { ManageComponent } from "./components/manage/manage.component";

const routes: Routes = [
    {
        path: '',
        component: RocketlistComponent
    },
    {
        path: 'rocket',
        component: RocketComponent
    },
    {
        path: 'create',
        component: ManageComponent
    },
    {
        path: 'edit/:id',
        component: ManageComponent
    }
]

export const AppRoutes = RouterModule.forRoot(routes);