import { Collection, MongoClient, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  async map (collection: Collection, id: ObjectId): Promise<any> {
    const dataById = await collection.findOne({ _id: id })
    const { _id, ...dataWithoutId } = dataById
    return Object.assign({}, dataWithoutId, { id: _id.toHexString() })
  }
}
