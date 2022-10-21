export class SliderImage{
    private id : number;
    private imageSrc : string;
    private caption : string;
    private altText : string;
    private sequence : number;

    constructor(id : number, src : string, caption : string, alt : string, seq : number){
        this.id = id;
        this.imageSrc = src;
        this.caption = caption;
        this.altText = alt;
        this.sequence = seq; 
    }

    getId(){
        return this.id;
    }
    getImageSrc(){
        return this.imageSrc;
    }
    getCaption(){
        return this.caption;
    }
    getAltText(){
        return this.altText;
    }
    getSequence(){
        return this.sequence;
    }
}