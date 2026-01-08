const jwt = require('jsonwebtoken');
const jwtSecreatKey = "nirjalanaik1706";

exports.login = (req, res) => {
    const user = req.body;

    if (
        user.email === "nirjalanaik1706@gmail.com"
        &&
        user.password === "nirjala1706"
        &&
        user.role==="admin"
    ) {

        const payload = {
            email: user.email,
            time: new Date().toISOString(),
            role:user.role
        };

        const token = jwt.sign(payload, jwtSecreatKey, { expiresIn: "1h" });
        console.log("jwt issued for:", payload.email);

        res.status(200).json({ token });
    }
    else {
        res.status(403).send("invalid user");
    }
};