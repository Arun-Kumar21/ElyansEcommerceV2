var CryptoJS = require("crypto-js");

import { NextResponse } from "next/server";

import User from "../../../../models/User";
import connectDb from "../../../../middleware/mongoose";

export async function POST(req: any) {
  const { name, email, password } = await req.json();

  connectDb();

  try {
    await User.create({ name: name, email: email, password: CryptoJS.AES.encrypt(password , 'secret123').toString()});
    return NextResponse.json({
      success: "successfully added user",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
