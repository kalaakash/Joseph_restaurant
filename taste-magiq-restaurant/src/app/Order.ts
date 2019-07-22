import { Time } from '@angular/common';
import { OrderStatusType } from './OrderStatusType';
import { Weekdays } from './Weekdays';
import { TM_User } from './TM_User';
import { TM_Driver } from './TM_Driver';

export class Order{
    id: number;
    time_ordered: Time;
    day_ordered: Weekdays;
    date_ordered: Date;
    order_status: String;
    person_ordered: TM_User;
    driver_assigned: TM_Driver;
}