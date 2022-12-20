var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


/* Register */
router.post('/register', async (req, res) => {
    // our register logic starts here.

    try {
        //get user input
        const { first_name, last_name, email, password } = req.body;

        //validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(400).send("All input is required");
        }

        //check if user already exist
        //validate if user exists in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exists. Please login");
        }

        //encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        //create user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        //create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h',
            }
        );

        //save user token
        user.token = token;

        //return new user
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }

    // Our register logic ends here

});

/* Login */
router.post("/login", async (req, res) => {
    // our login logic starts here

    try {
        //get user input
        const { email, password } = req.body;

        //validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }

        //validate if user exists in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {

            //create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            //save user token
            user.token = token;

            //user
            res.status(200).json(user);
        }

        res.status(400).send("Invalid credentials");

    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
