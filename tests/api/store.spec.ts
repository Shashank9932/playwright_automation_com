import {test,expect} from '../../../au.com.framework.playwright/src/fixtures/api-test';

test('should retrieve store inventory', async ({ storeApi }) => {
    const inventory = await storeApi.getInventory();
    expect(inventory).toBeDefined();
    expect(inventory.status).toBe(200);
    expect(typeof inventory).toBe('object');
    // Additional assertions can be added based on the expected structure of the inventory
});