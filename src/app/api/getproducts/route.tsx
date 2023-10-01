import { NextApiResponse } from "next";

import connectDb from "../../../../middleware/mongoose";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  let products = Product.find({});
  connectDb();

  try {

    products = await Product.find({});
    return NextResponse.json({products});

  } catch (error) {
    console.log(error);
  }
}
