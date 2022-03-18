
import { ObjectId } from 'mongodb'
import { IAccountModel } from '../usecases/add-account/db-add-account-protocols'

export interface ILoadAccountRepository {
  load: (id: ObjectId) => Promise<IAccountModel>
}
