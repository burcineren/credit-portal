import { CreditApplication } from "./credit-application.model";

export class AddCreditApplication {
  static readonly type = '[Credit Application] Add';
  constructor(public payload: CreditApplication) { }
}
