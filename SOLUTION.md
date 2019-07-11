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

2) Run docker image

3) In a new tab execute: mocha
```


> API endpoints

app.get( '/')

app.get('/user/list/page/:page')

app.post('/user/add', {user, email})

app.post('/user/search', {user})


--
app.all( '/sample') -> browser version for quick look
