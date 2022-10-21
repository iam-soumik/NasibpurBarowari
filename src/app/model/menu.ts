export class Menu{
    private menuName : string;
    private id : number;
    private url : String;

    constructor(name : string, id : number, link : string){
        this.menuName = name;
        this.id = id;
        this.url = link;
    }

    getMenuName(){
        return this.menuName;
    }
    getId(){
        return this.id;
    }
    getLink(){
        return this.url;
    }
}