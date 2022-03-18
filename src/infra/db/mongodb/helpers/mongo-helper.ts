import { Collection, Db, MongoClient, WithId } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  db: null as Db,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
    this.db = await this.client.db()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.db.collection(name)
  },

  map (data: WithId<any>): any {
    const { _id, ...dataWithoutId } = data
    return Object.assign({}, dataWithoutId, { id: _id.toHexString() })
  }
}
