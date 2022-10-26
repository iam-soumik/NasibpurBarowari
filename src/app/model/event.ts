export class Events{
    private eventName : string;
    private id : number;
    private eventDescription : string;
    private isActive : boolean;

    constructor(id : number, name : string, desc : string, isActive : boolean){
        this.id = id;
        this.eventName = name;
        this.eventDescription = desc;
        this.isActive = isActive;
    }

    getId(){
        return this.id;
    }
    getEventname(){
        return this.eventName;
    }
    getEventDesc(){
        return this.eventDescription;
    }
    isEventActive(){
        return this.isActive;
    }
}