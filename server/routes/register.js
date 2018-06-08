require("../models/register")
var Register = mongoose.model('userRegister');
var nodemailer = require('nodemailer');
//var User = mongoose.model('users');

exports.registerUser = function(req, res){
    console.log(req.body)
   var register = new Register({
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       email: req.body.email,
       mobile: req.body.mobile,
       username: req.body.username,
       password: req.body.password,
       question: {q1: req.body.question, a1: req.body.answer },
       token: ""

   })
   register.save(function(err, result){
       if(err){
           console.log("User Registration Failed");
           console.log(err);
           res.send({status:false, message:"Registration failed", err})
       }else{
           register.save();
           console.log("User registered successfully");
           res.send({ status: true, message: "Registered Successfully"});
       }
   });

}


exports.loginUser = function(req, res){
    console.log(req.body);
Register.find({"username": { $regex: new RegExp(req.body.username, "i") }, "password": req.body.password}, function(err, result) {
    if(err){
        console.log("error occurred");
        res.send({status: false, message: "login failed"})
    } else {
        console.log(result);
        if(result.length == 0){
            console.log("user doesn't exist");
            res.send({status: false, message:"User doesnt exist"})
        } else 
            res.send({status: true, message:"login successfully", result})
    }
})
}

exports.forgotPassword = function(req, res){
    var token = randtoken.generate(16);
Register.findOneAndUpdate({ email: req.body.email, "question": req.body.question},
{ $set: { password: token } }, function(err, result) {
    if(err){
        console.log("password doesn't channge");
        res.send({ status: false, message: "error occured"});
    }
     else{
         let transporter = nodemailer.createTransport({
             host: 'smtp.gmail.com',
             port: 587,
             secure: false,
             auth: {
                user: 'huntjohns1988@gmail.com',
                pass: 'Huntjohns@1988' 
                //You have to turn of secure access from gmail "Review blocked sign-in attempt"
            },
            tls: { rejectUnauthorized: false },
            debug: true
         });
         let mailOptions = {
             from: "no-reply@gmail.com",
             to: req.body.email,
             subject: 'Login Application email reset',
             html: 'Hello <strong>' + result.firstname +
             '</strong>,<br><br> Your password has been modified.<br>Your new Password is <strong>' + token +
             '</strong>.<br>For more information contact us on: access.com <br><br>Thank you & Regards,<br>Access Team'
         };

         transporter.sendMail(mailOptions, function(error, info){
             if(err){
                 return console.log(error);
             }
             else{
                console.log('Message %s sent: %s' + info.res);
                res.send({ status: true, message:"Password has been set", result });
             }
         });
     }
})

}
