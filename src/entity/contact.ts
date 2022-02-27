import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import PhoneNumber from "./phoneNumber";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
    id!: number;
  @Column()
    name!: string;
  @OneToMany(
      type => PhoneNumber,
      (phoneNumber) => phoneNumber.contact,
      {eager: true, cascade: true}
      )
    phoneNumber!: PhoneNumber[];
  @Column()
    email!: string;
  @Column()
    mailingAddress!: string;
}
export default Contact;