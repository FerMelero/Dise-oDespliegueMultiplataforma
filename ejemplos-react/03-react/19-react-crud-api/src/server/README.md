## Simple CRUD api bakend server
Note entity, with the fields:
- id
- timestamp
- body

### Installation

Install packages: `npm install`
Launch server: `node server`
Server will use port 3001


## API
Simples CRUD API

GET /notes
  USAGE:
    Get all notes

POST /notes
  USAGE:
    Add a new note

  PARAMS:
    id - UUID should be fine, but any unique id will work
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
    body - String

GET /notes/:id
  USAGE:
    Get the details of a single note

PUT /notes/:id
  USAGE:
    Edit the details of an existing note
  PARAMS:
    body - String

DELETE /notes/:id
  USAGE:
    Sets the deleted flag for a note to 'true'.
    Sets the parentDeleted flag for all child comments to 'true'.
