import 'reflect-metadata';

import { createConnection } from 'typeorm';

import Contact from '../entity/contact';
import PhoneNumber from '../entity/phoneNumber';

(async () => {
    console.log('Beginning dbseed task.');

    const conn = await createConnection();
    console.log('PG connected.');

    // Create seed data.
    let mobilePhone = new PhoneNumber();
    mobilePhone.label= 'mobile'
    mobilePhone.phoneNumber = '123'
    let homePhone = new PhoneNumber();
    homePhone.label= 'home'
    homePhone.phoneNumber = '123'
    let workPhone = new PhoneNumber();
    workPhone.label= 'work'
    workPhone.phoneNumber = '123'
    let otherPhone = new PhoneNumber();
    otherPhone.label= 'other'
    otherPhone.phoneNumber = '123'
    let contact = new Contact();
    contact.name = 'John Smith';
    contact.email='johnsmith@example.com'
    contact.mailingAddress='1 Fake Street, London'
    contact.phoneNumber=[mobilePhone, homePhone, workPhone, otherPhone]

    const contactRepo = conn.getRepository(Contact);
    contact = await contactRepo.save(contact); // re-assign to know assigned id
    console.log(`Patient saved. id = ${contact.id}`);

    // Close connection
    await conn.close();
    console.log('PG connection closed.');

    console.log('Finished dbseed task.');
})();