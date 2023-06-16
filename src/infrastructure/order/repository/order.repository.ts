import Order from "../../../domain/checkout/entity/order";
import OrderItem from "../../../domain/checkout/entity/orderItem";
import OrderRepositoryInterface from "../../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "./sequelize/order-item.model";
import OrderModel from "./sequelize/order.model";

export default class OrderRepository implements OrderRepositoryInterface{
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    await OrderModel.update(
      {
        customer_id: entity.customerId,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  };

  async find(orderId: string): Promise<Order> {
    let orderModel;
    try {
      orderModel = await OrderModel.findOne({
        where: {
          id: orderId,
        },
        include: ["items"],
      });
    } catch (error) {
      throw new Error("Order not found");
    }

    let orderItem = orderModel.items.map((item) => {
      return new OrderItem(
        item.id,
        item.name,
        item.price,
        item.product_id,
        item.quantity
      );
    });

    const order = new Order(orderModel.id, orderModel.customer_id, orderItem);

    return order;
  }

  async findAll(): Promise<Order[]> {
    let orderModel;
    try {
      orderModel = await OrderModel.findAll({
        include: ["items"],
      });
    } catch (error) {
      throw new Error("Orders not found");
    }

    const orders = orderModel.map(
      (order) =>
        new Order(
          order.id,
          order.customer_id,
          order.items.map(
            (order) =>
              new OrderItem(
                order.id,
                order.name,
                order.price,
                order.product_id,
                order.quantity
              )
          )
        )
    );

    return orders;
  }
}

