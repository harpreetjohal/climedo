import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Localization } from 'src/app/shared/localization/localization';
import { FileParserService } from '../services/fileParser.service';
import { FileType } from '../models/fileType.enum';

@Component({
    templateUrl: './fileParser.component.html',
    styleUrls: ['./fileParser.component.scss']
})
export class FileParserComponent {
  private file: File = null;
  public headerCols: string[] = [];
  public rowData: any[] = [];

  public constructor(private title: Title,
    private fileParserService: FileParserService) {
    title.setTitle(Localization.getString("fileParserPageTitle"));
  }

  public uploadFile(): void {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
        let fileContent = fileReader.result.toString();
        let jsonResult = this.fileParserService.parseFileToJson(fileContent.toString(), FileType.Csv);
        this.headerCols = Object.keys(jsonResult[0]);
        jsonResult.forEach((item: any) => {
          let values: any[] = [];
          values = Object.keys(item).map((key) => item[key]);
          this.rowData.push(values);
        });
      // if(this.getFileType(this.file) === FileType.Csv){
      //   this.extractCsvData(fileContent);
      // } else{
      //   //requires typings
      //   // todo implemenation

      // }
      
    }

    fileReader.readAsText(this.file);
  }

  private extractCsvData(fileContent: string) {
    let jsonResult = this.fileParserService.parseFileToJson(fileContent.toString(), FileType.Csv);
    this.headerCols = Object.keys(jsonResult[0]);
    jsonResult.forEach((item: any) => {
      let values: any[] = [];
      values = Object.keys(item).map((key) => item[key]);
      this.rowData.push(values);
    });
  }

  // private extractExcelDate(fileContent: string){
  //     const bstr: string = fileContent;
  //     const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

  //     /* grab first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
  // }

  public onFileChange(evt: any): void {
    this.file = evt.target.files[0];
  }

  private getFileType(file: File): FileType {
    let extension: string = file.name.split('.').pop();
    if (extension === 'csv') {
      return FileType.Csv;
    } else {
      return FileType.Excel;
    }
  }
}