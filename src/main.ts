import Address from "./domain/customer/value-object/address";
import Customer from "./domain/customer/entity/customer";
import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/orderItem";

let customer = new Customer("123", "Guilherme Coletto");
const address = new Address("Rua dois", 2, "12345-678", "São Paulo");
customer.changeAddress(address);
customer.activate();
//ID

//OBJETO
const item1 = new OrderItem("1", "item 1", 10, "p1", 5);
const item2 = new OrderItem("2", "item 2", 15, "p2", 4);
const order = new Order("1", "123", [item1, item2]);