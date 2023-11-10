
import connectDb from "../../../../middleware/mongoose";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(request:any) {

  connectDb();

  const {slug} = await request.json();

  try {
    let product = await Product.findOne({slug : slug});
    return NextResponse.json({ product });

  } catch (error) {
    console.log(error);
  }
}
