import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Contact  from "../entity/contact"
import PhoneNumber from "../entity/phoneNumber";

//Contact CRUD operations

class ContactController {
  // GET request list all entries
  public async listAll(req: Request, res: Response): Promise<Response> {
    let contacts;
    try {
      contacts = await getRepository(Contact).findOne();
    } catch (error) {
      //If not found, send a 404 response
      return res.status(404).send("No contacts found");
    }
    return res.json (contacts);
  }

  // GET request list entry by id
  public async getOneById(req: Request, res: Response): Promise<Response> {
    let contact;
    //Try to find contact in database
    try {
      contact = await getRepository(Contact).findOneOrFail(req.params.id);
    } catch (error) {
      //If not found, send a 404 response
      return res.status(404).send("Contact not found");
    }
    return res.json(contact)
  }

  // POST request save new entry
  public async newContact(req: Request, res: Response): Promise<Response> {
    const contact = getRepository(Contact).create(req.body)
    await getRepository(Contact).save(contact)
    return res.json(contact)
  }

  // PUT request update existing entry
  public async updateContact(req: Request, res: Response): Promise<Response> {
    let contact;
    //Try to find contact on database
    try {
      contact = await getRepository(Contact).findOneOrFail(req.params.id);
    } catch (error) {
      //If not found, send a 404 response
      return res.status(404).send("Contact not found");
    }
    getRepository(Contact).merge(contact, req.body)
    const result = await getRepository(Contact).save(contact)
    return res.json(result)
  }

  // DELETE request update existing entry
  public async deleteContact(req: Request, res: Response): Promise <Response> {
    const contact = await getRepository(Contact).delete(req.params.id)
    if (!contact) {
      return res.status(404).send( "Contact not found");
    }
    return res.json(contact)
  }
}

export default new ContactController();
