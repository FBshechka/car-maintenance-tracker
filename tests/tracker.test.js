import { describe, it, expect } from 'vitest';
import { checkOilChange, estimateServiceCost } from '../src/tracker.js';

describe('Моніторинг ТО автомобіля', () => {
    it('повідомляє про необхідність заміни масла', () => {
        expect(checkOilChange(150000, 139000)).toBe("Час замінити масло");
    });
    
    it('вказує, що масло в нормі', () => {
        expect(checkOilChange(145000, 140000)).toBe("Масло ще в нормі");
    });
    
    it('видає помилку, якщо поточний пробіг менший', () => {
        expect(checkOilChange(130000, 140000)).toBe("Помилка");
    });
    
    it('правильно рахує вартість ТО з податком', () => {
        expect(estimateServiceCost(1000, 0.2)).toBe(1200);
    });
    
    it('повертає 0, якщо базова ціна відємна', () => {
        expect(estimateServiceCost(-500, 0.2)).toBe(0);
    });
});
