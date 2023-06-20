import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import Address from "../value-object/address";
import CustomerCreatedEvent from "./customer-create.event";
import SendConsoleLog1Handler from "./handler/send-console-log-1.handler";
import SendConsoleLog2Handler from "./handler/send-console-log-2.handler";
import SendConsoleLog3Handler from "./handler/send-console-log-3.handler";

describe("Customer event handle tests", () => {
  it("Should call handles to change address of customer", () => {
    const eventDispatcher = new EventDispatcher();
    
    const customer = new Customer("123", "Carlos");
    const eventHandler2 = new SendConsoleLog2Handler();
    const eventHandler3 = new SendConsoleLog3Handler();

    const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");
    const spyEventHandler3 = jest.spyOn(eventHandler3, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler3);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler2);
    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler3);

    const customerCreatedEvent = new CustomerCreatedEvent({
      name: customer.name
    });

    eventDispatcher.notify(customerCreatedEvent);

    expect(spyEventHandler2).toHaveBeenCalled();
    expect(spyEventHandler3).toHaveBeenCalled();
  })
  
})
  