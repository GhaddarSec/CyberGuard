import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) =>{
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).json("Authentication Required.");
    }
    else{
        jwt.verify(token, process.env.JWT_KEY, (err, data)=>{
            if(err) return res.status(401).json("Invalid token.");
            req.userId=data.id;
            next();
        });
    }
};