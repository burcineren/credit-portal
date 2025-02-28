import { CreditApplication } from "./credit-aplication.model";

export class AddCreditApplication {
  static readonly type = '[Credit Application] Add';
  constructor(public payload: CreditApplication) { }
}
