
const productos = ["Alfajor simple", "Alfajor doble", "Alfajor triple"];
const precios = [10000, 18000, 25000]

const pedir = mensaje => prompt(mensaje)

const calcularTotal = (id, cantidad, descuento) => {
  let total = precios[id] * cantidad
  if (descuento === "si") {
    total = total - total * 0.1
  }
  return total;
}

alert("Productos:\n1: Alfajor simple\n2: Alfajor doble\n3: Alfajor triple");

let id = pedir("Elegí el número del producto:")
let cantidad = pedir("¿Cuántas cajas querés?")
let descuento = pedir("¿Tenés descuento? (si/no)")

let total = calcularTotal(id, cantidad, descuento)

alert("Producto: " + productos[id] + "\nCajas: " + cantidad + "\nTotal: $" + total)
console.log("Producto: " + productos[id] + "\nCajas: " + cantidad + "\nTotal: $" + total)
