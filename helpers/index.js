const formatearDinero = (dinero) => {
    const redondear = Math.round(dinero * 100) / 100;

    return redondear.toLocaleString("es-PE", {
        style: "currency",
        currency: "PEN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(parseInt(fecha));
    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    
    }
    return nuevaFecha.toLocaleDateString("es-PE", opciones);
}
export {
    formatearDinero,
    formatearFecha
}