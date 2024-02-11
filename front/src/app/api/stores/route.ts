import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET(req: Request){
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") as string;
    const stores = await prisma.store.findMany({
        orderBy: {id:"asc"},
        where:{
            id: id ? parseInt(id) : {},
        },
        // include:{
        //     likes:{
        //         where: session ? {userId: session.user.id} : {},
        //     }
        // }
    })
    return NextResponse.json(id ? stores[0] : stores,{
        status: 200,
    });
}

//post