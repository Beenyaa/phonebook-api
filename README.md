# ☎️ Phone book API challenge

An API that serves as the backend for a phone book app, providing a list of people and their contact details.

Made with Node.js + TypeScript + TypeORM + PostgreSQL within a 3 hour limit.

## ⚡️ Setup

Guide to install and run the API

REQUIREMENTS:
- Docker
- Node v16+
- Cypress

### Installation

`npm install`

### Run

`docker-compose up` - starts a dockerised PostgreSQL server

`npm run seed` - input a mock database entry

`npm run dev` - starts the express API server

## 🧠 Design Decisions

Walkthrough of design decisions their final verdicts.

### Programming Language

|   | JavaScript  | TypeScript  |
| :------------: | ------------ | ------------ |
| pros      |  Easier to write, little to no initial setup  | Easier to debug, quicker development  |
|  cons |   Potentially more errors at runtime   |  More initial setup, additional learning curve |

#### Verdict

While JavaScript requires less setup and is less convoluted to write, it would therefore suit a small project such as this one. However, in an effort to avoid errors at runtime, I am picking TypeScript for the project. After the initial setup it should be straight forward to use due to previous exposure to TypeScript and having experience with other statically typed languages.

### Database

|   | MongoDB  | MySQL  | PostgreSQL  |
| :------------: | ------------ | ------------ | ------------ |
|  database model | Document store  | Relational DBMS  |  Relational DBMS |
|  datatypes |  Enables to store unstructured data as well as structured data | structured data only  | structured data only |
|  SQL compliancy |  none (NoSQL) | Partial  | High compliancy |

#### Verdict 

While the scope of this project is minimal in terms of requirements and therefore any form of database would probably suffice the needs of the problem, I will be using PostgreSQL to tackle the challange as it is a widely used technology and would make it easier for me to find help through documentation or online sources, should I need it.
 
### Database Access

|   | pg  | Knex  | TypeORM  |
| :------------: | ------------ | ------------ | ------------ |
|  database interactions | Raw query  | Query builder & raw query | Data mapping through decorators, query builder and raw query |
|  pros | Super fast  | Flexible & fast, supports different SQL databases | Ease of use, supports a wide range of databases both SQL and NoSQL |
|  cons | Stuck with needing to write pure SQL, its the primary PostgreSQL client in Node.js so it doesn't work with other databases | Still requires some SQL knowledge for complex relations | Far slower when purely relying on data mapping  |

#### Verdict

As I am using PostgreSQL in this project I will be using TypeORM to access the database as it should help me save time in having to build custom queries for the simple CRUD operations that the project requires. While out of the 3 technologies TypeORM is probably the least documented due to the age of the project, because I am only planning to use its Data mapping capabilites, it should not hinder the progress of the phonebook-api project.

### Testing

|   | Cypress  | Jest |
| :------------: | ------------ | ------------ | ------------ |
|  testing category | Unit Testing, Integration Testing, E2E Testing  | Unit Testing |
|  info | An extensive testing suite  | An extendable test runner |

#### Verdict

In this project I will be using Cypress to carry out testing as in this project, I haven't done much development on the service level so there aren't any unit tests that I need to conduct, however since I have created a number of API endpoints, Cypress will allow me to carry out Integration Testing without much setup as Integration Testing is one of its many built-in features.

## ⬆️Potential Improvements
- Adding validation to the endpoints to avoid bad data and other avoidable errors.
- Separate endpoints to update the phone numbers since they are an object on their own.
- Integration Testing for the API endpoints
