import EventHandlerInterface from "../../../@shared/event/event-handle.interface";
import AddressCreatedEvent from "../address-changed.event";

export default class SendConsoleLog1Handler 
implements EventHandlerInterface<AddressCreatedEvent>
{
  handle(event: AddressCreatedEvent): void {
    console.log(
      `Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para:
        Rua: ${event.eventData.address.street},
        Numero: ${event.eventData.address.number},
        Cep: ${event.eventData.address.zipCode},
        Cidade: ${event.eventData.address.city},
      `
    );
  }
};