# TEMPLATE

## To start

Open http://localhost:3000 to view it in the browser.

```sh
npm i
npm start
node --run start
#
npm test
npm run build <ENV>
npm run preview
```

## env

```.env
.env               # loaded in all cases
.env.[ENV]    # only loaded in specified ENV [ dev, test, prod ]
```

 * .env.dev
 * .env.prod
 * .env.test
 
```env
VITE_LOGGER=true
#
VITE_TITLE=TITLE
```