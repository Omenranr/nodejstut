const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongodbURL = ""

mongoose.connect(mongodbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( res => {
    console.log("connected to mongodb")
})
.catch(err => {
    console.log(err)
});
