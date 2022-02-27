import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Contact from "./contact";
@Entity()
export class PhoneNumber {
    @PrimaryGeneratedColumn()
        id!: number;
    @Column()
        label!: string;
    @Column()
        phoneNumber!: string;
    @ManyToOne(
        () => Contact,
        (contact) => contact.phoneNumber
        )
        contact!: Contact;
}
export default PhoneNumber;