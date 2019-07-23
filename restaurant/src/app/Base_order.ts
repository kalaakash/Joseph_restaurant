import { Menu_item } from './Menu_item';

// tslint:disable-next-line: class-name
export interface Base_Order {
    menu_items: Menu_item[];
    // tslint:disable-next-line: ban-types
    comment: String;
}