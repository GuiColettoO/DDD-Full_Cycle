import EventHandlerInterface from "../../../@shared/event/event-handle.interface";
import CustomerCreatedEvent from "../customer-create.event";

export default class SendConsoleLog2Handler 
implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
};