///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
// added to beable to use http
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from "./app.component";

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);