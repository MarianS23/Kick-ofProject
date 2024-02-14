import {IUser} from '../shared/interfaces/user.interface';

export class AddUser{
    static readonly type = '[USER] Add'
    constructor(public payload: IUser){}
}

export class RemoveUser{
    static readonly type = '[USER] Remove'
    constructor(public payload: string){}
}

