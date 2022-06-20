module.exports = srv => {

    console.log(`Service name: ${srv.name} is served at ${srv.path}`)

    srv.after('READ','Books', xs => {
        let newBooks = [];
        xs.forEach(x => {
        if (x.stock > 500) {
          x.title = '(5% off!) ' + x.title
        }
        newBooks.push(x)
      })
      return newBooks
    })
}