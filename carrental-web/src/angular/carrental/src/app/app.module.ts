/**
 *    Copyright 2016 Sven Loesekann

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CrlistComponent } from "./crlist/crlist.component";
import { CrdetailComponent } from "./crdetail/crdetail.component";
import { CrValuesComponent } from "./crvalues/crvalues.component";
import { CrRestService } from "./services/crrest.service";
import { AppRoutingModule } from "./app-routing.module";
import { CrvaluesdComponent } from "./crvaluesd/crvaluesd.component";
import { CrdateComponent } from "./crdate/crdate.component";
import { NumberSeparatorPipe } from "./shared/number-separator.pipe";
import { NumberseparatorDirective } from "./shared/numberseparator.directive";
import { CrrootComponent } from "./crroot/crroot.component";
import { CruploadComponent } from "./crupload/crupload.component";
//import { MyErrorHandler } from './shared/my-error-handler';
import { BaseHrefInterceptor } from "./services/base-href-interceptor";

@NgModule({ declarations: [
        AppComponent,
        CrlistComponent,
        CrdetailComponent,
        CrValuesComponent,
        CrvaluesdComponent,
        CrdateComponent,
        NumberSeparatorPipe,
        NumberseparatorDirective,
        CrrootComponent,
        CruploadComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule], providers: [
        //{provide: ErrorHandler, useClass: MyErrorHandler},
        { provide: HTTP_INTERCEPTORS, useClass: BaseHrefInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
