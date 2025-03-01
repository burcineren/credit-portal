import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { CreditApplication } from './credit-aplication.model';
import { AddCreditApplication } from './credit-aplication.actions';
import { CreditApplicationService } from '../../services/credit-application.service';


export interface CreditApplicationStateModel {
  applications: CreditApplication[];
}

@State<CreditApplicationStateModel>({
  name: 'creditApplications',
  defaults: {
    applications: []
  }
})
@Injectable()
export class CreditApplicationState {

  @Selector()
  static getApplications(state: CreditApplicationStateModel) {
    return state.applications;
  }

  constructor(private appService: CreditApplicationService) { }

  @Action(AddCreditApplication)
  add(ctx: StateContext<CreditApplicationStateModel>, action: AddCreditApplication) {
    return this.appService.addApplication(action.payload).pipe(
      tap((newApp: CreditApplication) => {
        const state = ctx.getState();
        ctx.patchState({
          applications: [...state.applications, newApp]
        });
      })
    );
  }
}
