import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { Table2Component } from './tables/table2/table2.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { Map1Component } from './maps/map1/map1.component';
import { Map2Component } from './maps/map2/map2.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { PanelsComponent } from './components/panels/panels.component';
import { ListsComponent } from './components/lists/lists.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TagsComponent } from './components/tags/tags.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { Map3Component } from './maps/map3/map3.component';
import { Settings1Component } from './settings/settings1/settings1.component';
import { HelpComponent } from './help/help.component';
import { Settings2Component } from './settings/settings2/settings2.component';
import { Settings3Component } from './settings/settings3/settings3.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCb44fZMVNTqsA7phK5chbOolMgsJl9mFw'
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    Table2Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    Map2Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,
    Profile1Component,
    Map3Component,
    Settings1Component,
    HelpComponent,
    Settings2Component,
    Settings3Component
  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    Table2Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    Map2Component,
    Map3Component,
    StatsCardComponent,
    StatsCard2Component,    
    Dashboard1Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
