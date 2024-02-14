import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser, RemoveUser } from 'src/app/actions/data_trafic.actions';
import { IUser } from '../../shared/interfaces/user.interface';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateServiceService {
  /**
   * @type {Observable} stream from state
   */
  public user$: Observable<IUser>
  /**
   * @type {Object} record object of current user  
   */
  public userData!: any
  constructor(
    private store: Store
    ) {
      this.user$ = this.store.select(state => state.user.user[0])
    }


    /**
     * This function subscribe on Observeble and record data from state to userData
     * 
     */
  getUser():void{
    this.user$.subscribe(data => {
      this.userData = data
    })
  }

   /**
     * This function add data from form to state
     * @param {object} form Object with data from formGroup 
     * 
     */
  addUser(form:any):boolean{
    if(form != null){
      this.store.dispatch(new AddUser(form.value))
    }
    return false
  }

   /**
     * This function add data from form to state
     * @param {string} user pass the name of user that is in the state 
     * 
     */
  deleteUser(user:string) {
    this.store.dispatch(new RemoveUser(user))
  }
}
