import connectDb from "../../../../middleware/mongoose";
import Product from "../../../../models/Product";
import { NextResponse } from "next/server";

export async function POST(request: any) {

    const { _id, title, slug, desc, img, category, size, color, price, availableQty } = await request.json();

    connectDb();

    try {

        console.log(_id)
        await Product.findByIdAndUpdate(_id, {
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

        return NextResponse.json({
            message: "Product updated successfully",
            status: 200,
        });
    } catch (error) {
        NextResponse.json({ error });
    }

}
