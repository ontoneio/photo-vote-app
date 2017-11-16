const pgp = require('pg-promise')()

const connectionString = "postgres://process.env.USER:@localhost:5432/photos"
const db = pg(connectionString)

const addLike = (photo) => {
  
}

const addDislike = (photo) => {

}

const totalLikes = () => {

}