import { LocalizationEntry } from "./localizationEntry.model";

export class LocalizationDE {

    static values: LocalizationEntry[] = [
        new LocalizationEntry("home", "Home"),
        new LocalizationEntry("fileParserPageTitle", "Excel/Csv datei parser"),
        new LocalizationEntry("fileUpload", "Datei hochladen"),
        new LocalizationEntry("selectFileLabel", "Hochladen einer Excel-Datei (Einzelblatt oder Multisheet) oder CSV-Datei"),
        new LocalizationEntry("fileParser", "Datei-Parser"),
        new LocalizationEntry("fileUploadHelpText", "Nur .csv,.xls und xlsx Erweiterungen erlaubt."),
        new LocalizationEntry("resultPreviewHeadingText", "Vorschau der Daten in der Tabelle"),
    ];
}