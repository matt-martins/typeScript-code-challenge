# TypeScript Code Challenge (THE SOLUTION)

```bash
# Build
docker-compose build

# Run in Docker
docker-compose up

# Clear Docker
docker-compose down
```


# End-to-end test

```bash
1) Install mocha globally:

sudo npm install -g mocha

2) Instal npm packages for the project

sudo npm install

3) Run docker image

4) In a new tab execute: mocha
```


# API endpoints

```bash
app.get( '/')

app.get('/user/list/page/:page')

app.post('/user/add', {user, email})

app.post('/user/search', {user})
```

# INFO

> browser version for quick look

> http://localhost:8080/sample

> app.all( '/sample')

> please refer to: TsChallenge.postman_collection.json for some examples
