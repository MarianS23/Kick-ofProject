import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber, Subscription,of } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { StateServiceService } from 'src/app/shared/services/state-service.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],

})
export class EditComponent implements OnInit, OnChanges {
  public form!: FormGroup;
public complete!:boolean
  constructor(
    private fb: FormBuilder,
    private stateService: StateServiceService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.formInit();
  }


  ngOnChanges(): void {
    this.form.valueChanges.subscribe((event) => {
      console.log(event)
    })
  }

  formInit(): void {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userImg: [null, Validators.required],
      position: [null, Validators.required],
      birthDate: [null, Validators.required],
      aboutYou: [null, Validators.required],
    })
  }

  async submitForm(formDirective: any): Promise<void> {
    if (this.stateService.userData) {
      this.stateService.deleteUser(this.stateService.userData.firstName)
    }
    this.stateService.addUser(this.form)
    this.form.reset();
    formDirective.resetForm()
    await this.router.navigate(['about'])
  }

  resetSingleField(field: string): void {
    this.form.controls[field].reset();
  }

  resetForm() {
    this.form.reset(null, { emitEvent: false })
  }


}
