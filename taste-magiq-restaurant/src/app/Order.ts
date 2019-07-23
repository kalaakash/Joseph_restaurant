import { Time } from '@angular/common';
import { OrderStatusType } from './OrderStatusType';
import { TM_User } from './TM_User';
import { TM_Driver } from './TM_Driver';

export class Order{
    id: number;
    date_ordered: Date;
    order_status: String;
    person_id_ordered: number;
    driver_id_assigned: number;
}