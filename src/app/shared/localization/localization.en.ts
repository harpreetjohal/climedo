import { LocalizationEntry } from "./localizationEntry.model";

export class LocalizationEN {

    static values: LocalizationEntry[] = [
        new LocalizationEntry("home", "Home"),
        new LocalizationEntry("fileParserPageTitle", "Excel/Csv file parser"),
        new LocalizationEntry("fileUpload", "Upload file"),
        new LocalizationEntry("selectFileLabel", "Upload an Excel file (singlesheet or multisheet) or CSV file"),
        new LocalizationEntry("fileParser", "File Parser"),
        new LocalizationEntry("fileUploadHelpText", "Only .csv, .xls and xlsx extensions allowed."),
        new LocalizationEntry("resultPreviewHeadingText", "Preview data in table"),
        
    ];
}