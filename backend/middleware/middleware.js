const errorMiddleware = (err, req, res, next) => {
console.log(err.message)
res.status(500).send({msg:"global middleware error handling"})
}



module.exports = errorMiddleware