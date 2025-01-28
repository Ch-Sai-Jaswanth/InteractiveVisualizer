const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(user) {
            return res.status(409).json({ message: "User already exists", success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({ message: "User created successfully", success: true });
    }
    catch(err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(!user) {
            return res.status(403).json({ message: "Authentication failed", success: false });
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            return res.status(403).json({ message: "Authentication failed", success: false });
        }
        const jwToken = jwt.sign({ email: user.email, _id: user._id }, 
            process.env.JWT_SECRET, { expiresIn: "24h" });

        
        res.status(200)
        .json({ message: "Logged In successfully", 
                success: true,
                jwToken,
                email,
                name: user.name});
    }
    catch(err) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
}

module.exports = {
    signup, 
    login
}