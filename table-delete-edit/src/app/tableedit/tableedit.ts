import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

@Injectable()
export class FormService{
    form:any
    constructor(){}
    loginForm(){
        this.form={
            userId: [null],
            id: [null],
            title:[null,Validators.required],
            body:[null,Validators.required],
        }
        return this.form
    }
} 