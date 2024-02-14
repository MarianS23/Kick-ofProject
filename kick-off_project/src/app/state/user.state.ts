import { Injectable } from '@angular/core';
import { State ,Action,StateContext,Selector} from '@ngxs/store';
import { IUser } from '../shared/interfaces/user.interface';
import { AddUser, RemoveUser } from '../actions/data_trafic.actions';


export class UserStateModel {
    public user!:IUser[];



}
@State<UserStateModel>({
    name: 'user',
    defaults: {
        user:[]
    }
})
@Injectable()


export class UserState{
    @Selector()
    static getUser(state:UserStateModel){
        return state.user
    }

    @Action(AddUser)
    add({getState,patchState}:StateContext<UserStateModel>, {payload}:AddUser){
        const state = getState();
        patchState({
            user:[...state.user,payload]
        })
    }

    @Action(RemoveUser)
    remove({getState,patchState}:StateContext<UserStateModel>, {payload}:RemoveUser){
        patchState({
            user:getState().user.filter(a=>a.firstName != payload)
        })
    }
}
