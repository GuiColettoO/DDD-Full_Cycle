import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerCreatedEvent from "./customer-create.event";
import SendConsoleLog1Handler from "./handler/send-console-log-1.handler";

describe("Address event handle tests", () => {
  it("Should call handles to change address of customer", () => {
    const eventDispatcher = new EventDispatcher();
    
    const customer = new Customer("123", "Carlos");
    const address = new Address("Rua 1", 123, "123456", "São Paulo");
    customer.changeAddress(address);

    const eventHandler1 = new SendConsoleLog1Handler();

    const spyEventHandler = jest.spyOn(eventHandler1, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler1);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);

    const customerCreatedEvent = new CustomerCreatedEvent({
      id: customer.id,
      name: customer.name,
      address: {
        street: customer.Address.street,
        number: customer.Address.number,
        zipCode: customer.Address.zip,
        city: customer.Address.city
      }
    })

    eventDispatcher.notify(customerCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();


  })
  
})
  