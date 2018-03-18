
import { Map3Component } from './views/maps/map3/map3.component';
import { PopoversComponent } from './views/components/popovers/popovers.component';
import { TooltipsComponent } from './views/components/tooltips/tooltips.component';
import { TimePickerComponent } from './views/components/time-picker/time-picker.component';
import { DatePickerComponent } from './views/components/date-picker/date-picker.component';
import { CollapseComponent } from './views/components/collapse/collapse.component';
import { TagsComponent } from './views/components/tags/tags.component';
import { TabsComponent } from './views/components/tabs/tabs.component';
import { ProgressBarsComponent } from './views/components/progress-bars/progress-bars.component';
import { PaginationComponent } from './views/components/pagination/pagination.component';
import { ListsComponent } from './views/components/lists/lists.component';
import { PanelsComponent } from './views/components/panels/panels.component';
import { CardsComponent } from './views/components/cards/cards.component';
import { ButtonsComponent } from './views/components/buttons/buttons.component';
import { Map2Component } from './views/maps/map2/map2.component';
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'components', children:
    [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'panels', component: PanelsComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'progress-bars', component: ProgressBarsComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'tags', component: TagsComponent },
      { path: 'collapse', component: CollapseComponent },
      { path: 'date-picker', component: DatePickerComponent },
      { path: 'time-picker', component: TimePickerComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'popovers', component: PopoversComponent },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
      { path: 'map2', component: Map2Component},
      { path: 'map3', component: Map3Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
