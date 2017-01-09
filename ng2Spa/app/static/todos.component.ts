import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    // template: 'hello',
    templateUrl: 'app/static/dashboard/todos.html',
})

export class Todos{
    value = '';
    onEnter(value: string){
        this.value = value;
        alert(this.value);
    }
}