import { IAccountModel, IAddAccountModel } from '../usecases/add-account/db-add-account-protocols'

export interface AddAccountRepository {
  add: (accountData: IAddAccountModel) => Promise<IAccountModel>
}
