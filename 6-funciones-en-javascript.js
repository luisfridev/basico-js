/**
 * Código de la clase - Funciones en Javascript de Platzi
 * @luisfridev - luisfridev.com
 */

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    if (originalPrice <= 0) {
        console.log('El precio original debe ser mayor a cero.')
    }

    if (discountPercentage < 0) {
        console.log('El porcentaje de descuento no puede ser negativo.')
    }

    if (discountPercentage > 100) {
        console.log('El porcentaje de descuento no puede ser mayor a 100.')
    }

    const discountAmount = (originalPrice * discountPercentage) / 100
    const priceWithDiscount = originalPrice - discountAmount

    return priceWithDiscount
}

const productPrice = 200
const discountPercentage = 15

const discountedPrice = calculateDiscountedPrice(productPrice, discountPercentage)
console.log(`
    Precio original: $ ${productPrice.toFixed(2)}
    Descuento: ${discountPercentage}%
    Precio con descuento: $ ${discountedPrice.toFixed(2)}
    `)