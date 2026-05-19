import { test, expect } from '@playwright/test';
import path from 'path';

test('Додавання пробігу перевіряє статус масла', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    await expect(page.locator('#title')).toHaveText('Моніторинг ТО');
    await page.fill('#mileage', '155000');
    await page.click('#check-btn');
    await expect(page.locator('#result')).toHaveText('Час замінити масло');
});
