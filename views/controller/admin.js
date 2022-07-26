const user = {
    email: "brittovincent111@gmail.com",
    password: 12345 
}

const adminlogin = (req, res) => {
    if (req.session.user) {
        res.redirect('/admin/dashboard')
    } else {
        // const message = req.flash('msg')
        res.render('adminlogin')
    }
    // res.render("adminlogin")
}

const adminloginPost = (req, res) => {

    if (req.body.email == user.email && req.body.password == user.password) {
        // res.send('Login sucess')
        req.session.user = req.body.email;
        res.redirect('/admin/dashboard')
    } else {
        // res.send('invalid user name')
        // req.flash('msg', 'Invalid user name or password')
        res.redirect('/admin/login')
    }
}


const admindashboard=(req,res)=>{
    res.render('admindashboard')
}


const adminlogout = (req,res)=>{
    req.session.destroy((err)=>{
       
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.redirect('/admin/login')
        }
    })
}



module.exports={adminlogin,adminloginPost,admindashboard,adminlogout}