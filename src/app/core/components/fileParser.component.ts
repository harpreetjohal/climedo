import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Localization } from 'src/app/shared/localization/localization';
import { FileParserService } from '../services/fileParser.service';
import { FileType } from '../models/fileType.enum';
import { CustomData } from '../models/customData.model';

@Component({
    templateUrl: './fileParser.component.html',
    styleUrls: ['./fileParser.component.scss']
})
export class FileParserComponent {
  private file: File = null;
  public headerCols: string[] = [];
  public rowData: any[] = [];
  public customDataList : CustomData[] = [];

  public constructor(private title: Title,
    private fileParserService: FileParserService) {
    title.setTitle(Localization.getString("fileParserPageTitle"));

  }

  public uploadFile(): void {
    this.resetData();
    let fileReader = new FileReader();
    fileReader.onload = (event) => {
      let fileContent = fileReader.result.toString();
      this.customDataList = this.fileParserService.parseFileToJson(fileContent.toString(), this.getFileType(this.file));
    }

    fileReader.readAsBinaryString(this.file);
  }

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

  private resetData(): void {
    this.headerCols = [];
    this.rowData = [];
  }
}