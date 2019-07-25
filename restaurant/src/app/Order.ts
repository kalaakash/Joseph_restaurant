import { Base_Order } from '../app/Base_order';

export class Order{
    id: number;
    order_status: String;
    driver_id_assigned: number;
    driver_assigned: Boolean;
    isVisible: Boolean;
    isActive: Boolean;
    stillEditing: Boolean;
    base_order: Base_Order;
}