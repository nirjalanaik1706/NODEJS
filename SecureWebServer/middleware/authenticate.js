const jwt = require('jsonwebtoken');
const jwtSecreatKey="nirjalanaik1706";

function authenticateToken(req,res,next){
    const authHeader=req.header("Authorization");

    if(!authHeader){
        return res.status(401).send("Autherization header missing");
    }

    const parts=authHeader.split(" ");

    if(parts.length!==2 || parts[0] !=="Bearer"){
        return res.status(400).send("Invalid Authorization Header Format");
    }

    const token=parts[1];
    jwt.verify(token,jwtSecreatKey,(err,decoded)=>{
        if(err){
            console.error("Token varification errorr:",err);
            return res.status(403).send("Unauthorized request");
        }
        req.user=decoded;
        next();
    });
}

module.exports=authenticateToken;