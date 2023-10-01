var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { email, password } = await req.json();

  connectDb();

  try {
    let user = await User.findOne({
      email: email,
    });

    let bytes = CryptoJS.AES.decrypt(user?.password, "secret123");
    let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (email == user?.email && password == decryptedPassword) {
      let token = jwt.sign(
        {
          name: user?.name,
          email: user?.email,
        },
        "jwtsecret" , { expiresIn: "2d"}
      );
      return NextResponse.json({ token  , success: true , status: 200 , name : user?.name});
    }

    return NextResponse.json({ error: "authentification failed" , success : false , status: 401 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal server error occur" , status: 500 , success : false });
  }
}
