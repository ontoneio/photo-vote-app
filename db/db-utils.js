const pgp = require('pg-promise')()

// const connectionString = "postgres://process.env.USER:@localhost:5432/photos"
const connectionString = "postgresql://localhost:5432/photos"



const db = pgp(connectionString)

const addLike = (photoID) => {
  // return db.none(`UPDATE photo_votes SET dislikes = (SELECT dislikes FROM photo_votes WHERE photo_id = $1) + 1
  //   WHERE photo_id = $1`, photoID)
  // getLikes(photoID)
  // .then()
}

const addDislike = (photoID) => {
  return db.none(`UPDATE photo_votes SET likes = (SELECT likes FROM photo_votes WHERE photo_id = $1) + 1
    WHERE photo_id = $1`, photoID)
}

const getLikes = (photoID) => {
  return db.one(`SELECT likes FROM photo_votes WHERE photo_id = $1`, photoID)
}
const setLikes = (photoID, likeCount) => {
  return db.query(`UPDATE photo_votes SET likes=$1 WHERE photo_id=$2`, [likeCount, photoID])

}
module.exports = {
  add: addLike,
  subtract: addDislike,
  total: getLikes
};


setLikes(0, 1)
.then(() => {
  getLikes(0)
  .then(likes => console.log(likes, 'this is llikes'))
})
.catch(err => console.log(err))

// getLikes(2)
// .then(results => {
//   console.log(results)
// })
