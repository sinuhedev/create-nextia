# To start
Open http://localhost:3000 to view it in the browser.

```sh
npm install
#
node --run dev
node --run test
node --run build:dev
node --run build:prod
```

# env
```.env
.env       # loaded in all cases
.env.[ENV] # only loaded in specified ENV [ development, test, production ]
```

 * .env.development
 * .env.test
 * .env.production
 
```env
PUBLIC_TITLE=dev
PUBLIC_API=https://65fd14fb9fc4425c653119c5.mockapi.io/api/v1
```