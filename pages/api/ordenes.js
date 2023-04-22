import {PrismaClient} from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    if(req.method === "POST") {
        
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                fecha: req.body.fecha,
                pedido: req.body.pedido
            }
        });
        return res.status(200).json(orden);
    }else if(req.method === "GET") {
        const ordenes = await prisma.orden.findMany({
            where: {
                estado: false
            }
        });
        return res.status(200).json(ordenes);
    }else {
        return res.json({msg: "No soportado"});

    }
    
}