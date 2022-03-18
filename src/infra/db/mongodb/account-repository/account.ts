import { ObjectId, WithId } from 'mongodb'
import { IAddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { ILoadAccountRepository } from '../../../../data/protocols/load-account-repository'
import { IAccountModel } from '../../../../domain/models/account'
import { IAddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements IAddAccountRepository, ILoadAccountRepository {
  async add (accountData: IAddAccountModel): Promise<IAccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const data = await this.load(id)
    return MongoHelper.map(data) as IAccountModel
  }

  async load (id: ObjectId): Promise<WithId<any>> {
    const accountCollection = MongoHelper.getCollection('accounts')
    return await accountCollection.findOne({ _id: id })
  }
}
