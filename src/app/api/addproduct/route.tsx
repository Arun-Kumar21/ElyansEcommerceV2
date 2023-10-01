import connectDb from "../../../../middleware/mongoose";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { title, slug, desc, img, category, size, color, price, availableQty } = await request.json();

  connectDb();

  try {
    await Product.create({
      title,
      slug,
      desc,
      img,
      category,
      size,
      color,
      price,
      availableQty,
    });
    return NextResponse.json({ success: "product added successfully" });
  }
  catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
