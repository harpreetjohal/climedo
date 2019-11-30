import { Injectable } from "@angular/core";
import { FileType } from '../models/fileType.enum';
import * as XLSX from 'xlsx';
import { CustomData } from '../models/customData.model';

@Injectable()
export class FileParserService {
    public isBusy:boolean = false;
    public constructor() {

    }

    public parseFileToJson(fileContent:string , fileType: FileType): CustomData[]{
        this.isBusy = true;
        let customDataList : CustomData[] = [];

        if(fileType === FileType.Csv){
            customDataList = this.convertCsvToJson(fileContent);
        } else{
            customDataList = this.convertExcelToJson(fileContent);
        }

        this.isBusy = false;
        return customDataList;
    }

    private convertExcelToJson(data: string): CustomData[] {
        let workBook = null;
        let jsonData = null;
        let customDataList : CustomData[] = [];
        
        workBook = XLSX.read(data, { type: 'binary' });

        jsonData = workBook.SheetNames.reduce((initial, name) => {
            let customData : CustomData = new CustomData();
            customData.name = name;
            const sheet = workBook.Sheets[name];
            let jsonResult = XLSX.utils.sheet_to_json(sheet);

            if(jsonResult && jsonResult.length > 0)
            {
                customData.headers = Object.keys(jsonResult[0]);
                customData.rows = [];

                jsonResult.forEach((item: any) => {
                  let values: any[] = [];
                  values = Object.keys(item).map((key) => item[key]);
                  customData.rows.push(values);
                });

                customDataList.push(customData);
            }
            
        }, {});
      
      return customDataList;
    }

    public convertCsvToJson(csvFileContent:string): CustomData[] {
        let customDataList : CustomData[] = [];
        let customData = new CustomData();
        let lines = csvFileContent.split("\n");
        customData.name ='Csv';

        if(lines &&  lines.length > 0)
        {
            customData.headers = lines[0].split(",");
            customData.rows = [];
        
            for (let i = 1; i < lines.length; i++) {

                let row = [];
                let currentline = lines[i].split(",");
                let headersCount = customData.headers.length;

                if(headersCount === currentline.length){

                    for (let j = 0; j < headersCount; j++) {
                        row[j] = currentline[j];
                    }
            
                    customData.rows.push(row);
                }
            }
        }

        customDataList.push(customData);
        return customDataList; 
    }
}