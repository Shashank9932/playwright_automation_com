import {test,expect} from '../../../au.com.framework.playwright/src/fixtures/api-test';

test('should retrieve store inventory', async ({ storeApi }) => {
    const inventory = await storeApi.getInventory();
    expect(inventory).toBeDefined();
    
    console.log('Inventory:', inventory);
    console.log('status',inventory.status);
   
    expect(inventory).toBeDefined();
    expect(typeof inventory).toBe('object');
    // Additional assertions can be added based on the expected structure of the inventory
});