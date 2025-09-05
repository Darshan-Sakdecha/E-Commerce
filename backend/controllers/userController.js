import UserModel from "../models/userModel";
import validator from "validator";


// Route for user login
const loginUser = async (req, res) => {

}

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exist or not
        const exist = await UserModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: 'User already exists' });
        }
        // validating email format & strong password
        if (!validator.isEmail(email)) {

        }
    } catch (error) {

    }
}

// Route for Admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin };