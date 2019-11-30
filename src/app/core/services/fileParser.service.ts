import { Injectable } from "@angular/core";
import { FileType } from '../models/fileType.enum';

@Injectable()
export class FileParserService {
    public isBusy:boolean = false;
    public constructor() {

    }

    public parseFileToJson(fileContent:string , fileType: FileType): any{
        this.isBusy = true;
        let jsonObject :object = null;

        if(fileType === FileType.Csv){
            jsonObject = this.convertCsvToJson(fileContent);
        } else{
            jsonObject = this.convertExcelToJson(fileContent);
        }

        this.isBusy = false;
        return jsonObject;
    }

    private convertExcelToJson(fileContent: string): any {
        throw new Error("Method not implemented.");
    }

    public convertCsvToJson(csvFileContent:string): any {
        let lines = csvFileContent.split("\n");
        let result = [];
        let headers = lines[0].split(",");
    
        for (let i = 1; i < lines.length; i++) {
    
            let obj = {};
            let currentline = lines[i].split(",");
    
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
    
            result.push(obj);
        }
    
        return result; 
    }
}