
const express = require('express')
const { validationResult, body } = require('express-validator')
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");
const Web3 = require("web3");
const jwt = require("jsonwebtoken");
const path = require('path');
const axios = require("axios");

require('dotenv').config({ path: path.join(__dirname, '.env') });

app.use(cors())
app.use(cookieParser());

// 라우팅
app.use('/',async(req,res)=>{
	// res.send('hello, world!')
    await axdata('중구',(err))
})
app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

//라우팅 + get,post 메소드
app.get('/',(req,res)=>{
	res.send('GET')
})

app.post('/auth',
    body("address").isEthereumAddress(),
    body("signature").exists(),
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty())
            return res.status(400).json({message: 'invalid params', errors:errors.array()})
    
        // const message = config.server.SIGN_MESSAGE
        const message = 'dapp-sign'
        const address = req.body.address
        const signature = req.body.signature

        let hash = Web3.utils.soliditySha3(message, address)
        const recovered = Web3.eth.accounts.recover(hash, signature)

        if(address.toLowerCase() !== recovered.toLowerCase()){
            res.status(500).json({message:'recovered address is not matched'})
        }

        const payload = {wallet:recovered}
        const option = {expiresIn:'7d', issuer:'server-auth'}
        const jwt_token = jwt.sign(payload, process.env.JWTSECRET, option)
        // const cookieOptions = {
        //     // sameSite: "strict",
        //     sameSite: "none",
        //     httpOnly: true,
        //     secure: true,
        //     // domain: "http://localhost",
        //     // expires: new Date(Date.now() + parseInt(ENV.AUTH_EXPIREATION)),
        //     maxAge: 24 * 60 * 60 * 1000,
        //     path: "/",
        //   };
        // res.cookie('jwt', jwt_token, cookieOptions)

        return res.status(200).json({
            message:'jwt token issued',
            jwt_token,
        })
    }
)

const PORT = process.env.PORT
// let PORT = process.env.PORT || 3323;

app.listen(PORT, ()=>{
	console.log(`The Express server is listening at PORT: ${PORT}`)
})