import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {

    it("should create a customer", () => {
        let customer = CustomerFactory.create("Carlos");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Carlos");
        expect(customer.Address).toBeUndefined();
    });

    it("should create a customer with address", () => {
        const address = new Address("Rua 1", 123, "Bairro 1", "Cidade 1");
        let customer = CustomerFactory.createWithAddress("Carlos", address);

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Carlos");
        expect(customer.Address).toBe(address);
    });
});