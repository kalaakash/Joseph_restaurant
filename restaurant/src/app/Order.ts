import { Base_Order } from '../app/Base_order';

export class Order{
    id: number;
    date_ordered: Date;
    order_status: String;
    person_ordered: String;
    driver_id_assigned: number;
    base_order: Base_Order;
}