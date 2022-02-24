import { IAccountModel, IAddAccountModel } from '../usecases/add-account/db-add-account-protocols'

export interface IAddAccountRepository {
  add: (accountData: IAddAccountModel) => Promise<IAccountModel>
}
