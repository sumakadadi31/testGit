/*
 * TypeScript is strongly typed and does static type-checking once assigned a type.
 * Even if a type is not explicitly set, it is inferred.
 * 
 * Because of this, a variable cannot be assigned a value of another type
 * Even the runtime value assigned cannot be of different type
 */

// the type of this variable is automatically inferred to be number. Hence it cannot be re-assigned to a string (for example)
let priceOfGooglePixel = 49500;

// cannot assign a string
// priceOfGooglePixel = 'USD Six Hundred';

function getPriceOfGooglePixel() {
    return 'Rupees Fifty Thousand';
}

// string assigned only at runtime - yet static type-checking helps catch this
// priceOfGooglePixel = getPriceOfGooglePixel();