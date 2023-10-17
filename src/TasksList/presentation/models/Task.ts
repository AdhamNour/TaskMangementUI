export enum TASK_STATE {
    NOT_STARTED,
    IN_PROGRESS,
    FINISHED,

}
export default class Task {
    private state:TASK_STATE;
    constructor(private id:string,private title:string) {
        this.state=TASK_STATE.NOT_STARTED;
    }
    getTitle(){
        return this.title;
    }
    getId(){
        return this.id;
    }
    getState(){
        return this.state;
    }
    setState(newState:TASK_STATE){
        this.state=newState;
    }
}