import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CoreComponent } from "./core.component";
import { coreRouting } from "./core.routes";
import { FileParserComponent } from './components/fileParser.component';
import { FileParserService } from './services/fileParser.service';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        coreRouting,
        SharedModule
    ],
    declarations: [
        CoreComponent,
        FileParserComponent
    ],
    providers: [
        FileParserService
    ]
})
export class CoreModule { }