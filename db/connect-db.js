const pgp = require('pg-promise')()

const connectionString = "postgres://process.env.USER:@localhost:5432/photos"
const db = pg(connectionString)

const addLike = (photo) => {
  return db.none(`UPDATE photo_votes SET dislikes = (SELECT dislikes FROM photo_votes WHERE photo_id = $1) + 1
    WHERE photo_id = $1`, photo)
}

const addDislike = (photo) => {
  return db.none(`UPDATE photo_votes SET likes = (SELECT likes FROM photo_votes WHERE photo_id = $1) + 1
    WHERE photo_id = $1`, photo)
}

const getLikes = (photo) => {
  return db.any(`SELECT * FROM photo_votes WHERE photo_id = $1`, photo)
}