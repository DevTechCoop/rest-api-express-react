
const usersCtrl={};

const User = require('../models/mUser');

usersCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

usersCtrl.createUser = async (req, res) => {
    try {
        const { username } = req.body;

        const newUser = new User({ username });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

usersCtrl.deleteUser = async (req, res) => {
    
    await User.findByIdAndDelete(req.params.id);
    res.json('User deleted');
}
usersCtrl.updateUser = async (req,res) => {
    const { username }=req.body;
    await User.findOneAndUpdate(req.params.id, { username } );
    console.log(User);
    res.json({message:"PUT Request"})
}
usersCtrl.getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
        res.json({user:"GeT Request"}) 
    }
        
module.exports= usersCtrl;      
