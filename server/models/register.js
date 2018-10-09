var Schema = mongoose.Schema;

var register = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: Number,
    username: String,
    password: String,
    question: {q1: String, a1: String },
    token: String
}, {collection: 'usersData'});

mongoose.model('userRegister', register);
