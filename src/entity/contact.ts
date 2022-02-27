import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
    id!: number;
  @Column()
    name!: string;
  @Column()
    homeNumber!: string;
  @Column()
    mobileNumber!: string;
  @Column()
    workNumber!: string;
  @Column()
    otherNumber!: string;
  @Column()
    email!: string;
  @Column()
    mailingAddress!: string;
}
export default Contact;