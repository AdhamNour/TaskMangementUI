export default class Task {
    constructor(private id:string,private title:string) {
        
    }
    getTitle(){
        return this.title;
    }
    getId(){
        return this.id;
    }
}