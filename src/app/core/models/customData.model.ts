export class CustomData {
    public name: string;
    public headers: string[];
    public rows: any[];

    public constructor(model?: CustomData){

        if(!model){
            return;
        }

        this.name = model.name;
        this.headers = [];
        if(model.headers){
            model.headers.forEach((header:string) =>{ this.headers.push(header) });
        }

        this.rows = [];
        if(model.rows){
            model.rows.forEach((row:string) =>{ this.rows.push(row) });
        }
    }
}