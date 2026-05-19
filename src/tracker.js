export function checkOilChange(currentMileage, lastOilChange) {
    if (currentMileage < lastOilChange) return "Помилка";
    if (currentMileage - lastOilChange >= 10000) return "Час замінити масло";
    return "Масло ще в нормі";
}

export function estimateServiceCost(basePrice, taxRate) {
    if (basePrice < 0) return 0;
    return basePrice + (basePrice * taxRate);
}
