import EventHandlerInterface from "./event-handle.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {

    notify(event: EventInterface): void;
    register(eventType: string, eventHandler: EventHandlerInterface): void;
    unregister(eventType: string, eventHandler: EventHandlerInterface): void;
    unregisterAll(): void;

};