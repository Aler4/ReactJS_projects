import {makeAutoObservable} from 'mobx'
import { Todo } from '../types';

class Todos {
    todos: Todo[] | [] = JSON.parse((localStorage.getItem('todo') as string)) ?? [];

    constructor() {
        makeAutoObservable(this)
    }
    addToStorage(items: Todo[]) {
        localStorage.setItem('todo' ,JSON.stringify(items));
    }
    add(todo: Todo) {
        this.todos = [...this.todos, todo];
        this.addToStorage(this.todos);
    }
    delete(id: string) {
        this.todos = this.todos.filter(item => item.id !== id);
        this.addToStorage(this.todos);
    }

}
export default new Todos();