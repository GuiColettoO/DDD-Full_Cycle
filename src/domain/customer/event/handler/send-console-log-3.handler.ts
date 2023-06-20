import EventHandlerInterface from "../../../@shared/event/event-handle.interface";
import CustomerCreatedEvent from "../customer-create.event";

export default class SendConsoleLog3Handler 
implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
};