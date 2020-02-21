import {mdb, dbName, url} from '../db'
import {ObjectId} from 'mongodb'

class Contact {
  add = (contact, callback) => {
    mdb.connect(url, (err, client) => {
      if (err) {
        callback(err)
      }
      const db = client.db(dbName)
      const collection = db.collection('contacts')

      collection.insertOne(contact, (err, result) => {
        if (err) {
          return callback(err)
        }
        callback(null, result)
        client.close()
      })
    })
  }

  getAll = (callback) => {
    mdb.connect(url, (err, client) => {
      if (err) {
        callback(err)
      }
      const db = client.db(dbName)
      const collection = db.collection('contacts')
      collection.find({}).toArray((err, docs) => {
        if (err) {
          return callback(err)
        }
        callback(null, docs)
      })
    })
  }

  getById = (id, callback) => {
    mdb.connect(url, (err, client) => {
      if (err) {
        callback(err)
      }
      const db = client.db(dbName)
      const collection = db.collection('contacts')
      collection.find({_id: ObjectId(id)}).toArray((err, docs) => {
        if (err) {
          return callback(err)
        }
        callback(null, docs)
      })
    })
  }
}

export default Contact
