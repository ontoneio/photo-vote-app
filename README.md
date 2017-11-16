# Photo Voting App 
## To Get Started

- 1. `npm install` To install all app dependencies
- 2. `npm run dev:start` To start development server.
- 3. `createdb photos` To create the database for photos
- 4. `psql photos < schema.sql` To create the schema file
- 5. `psql photos < seed-data.sql` To seed in the data
- 6. `dropdb photos` To drop/delete the database

### Project Notes: 
  1. Client: 
      fetch --target url: some route on server

  2. Server: 
      route that receives fetch call
      update db
      send vote counts back

  3. Client:
      fetch.then
      receive vote counts
      update DOM