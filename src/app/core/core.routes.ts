import { RouterModule, Routes } from "@angular/router";
import {CoreComponent}  from"./core.component";
import { FileParserComponent } from './components/fileParser.component';

export const coreRoutes: Routes = [
    {
        path: "",
        component: CoreComponent,
        children: [
            {
                path: "fileparser",
                component: FileParserComponent
                
            }
        ]
    }
];

export const coreRouting: any = RouterModule.forChild(coreRoutes);
