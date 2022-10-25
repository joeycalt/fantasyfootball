require ('../config/db.controller')
const Post = require ('../model/Facts')

Facts.create({
    name: 'week number',
    desc: 'ffffotw  post'
},
(err, createdFacts) => {
    if(err) {
        console.log(err);
    } else{
        console.log(createdFacts)
    }
}
)