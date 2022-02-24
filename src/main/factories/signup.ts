import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const accountMongoReposityory = new AccountMongoRepository()
  const bcyptAdapter = new BcryptAdapter(salt)
  const dbAddAccount = new DbAddAccount(bcyptAdapter, accountMongoReposityory)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
  return signUpController
}
