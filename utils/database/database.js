const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongodbURL = 'mongodb+srv://omenranr:dopdop@doplid-gtvfn.mongodb.net/nodejstutorial?retryWrites=true&w=majority'

mongoose.connect(mongodbURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( res => {
    console.log("connected to mongodb")
})
.catch(err => {
    console.log(err)
});
