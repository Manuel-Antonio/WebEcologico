import {PrismaClient} from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();
    if(req.method === "GET") {
        const ordenes = await prisma.orden.findMany({
            where: {
                estado: true
            }
        });
        return res.status(200).json(ordenes);
    }else {
        return res.json({msg: "No soportado"});
    }
}