import EventHandlerInterface from "../../../@shared/event/event-handle.interface";
import ProductCreatedeEvent from "../product-create.event";

export default class SendEmailWhenProductIsCreatedHandler 
implements EventHandlerInterface<ProductCreatedeEvent>
{
  handle(event: ProductCreatedeEvent): void {
    console.log(`Sending email to .....`); 
  }
};