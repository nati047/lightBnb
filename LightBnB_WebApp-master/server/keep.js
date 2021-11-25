const getAllProperties = (options, limit = 10) => {

  return pool
  .query(`SELECT * FROM properties LIMIT $1`, [limit])
  .then((result) => result.rows)
  .catch((err) => {
    console.log(err.message);
  })
};

const getUserWithEmail = function(email) {
  return pool.query(
    `SELECT * FROM users WHERE email = $1`, [email]
  )
  .then(result => result.rows[0])
  .catch(err => null);
  
 }