# TEMPLATE

# To start
Open http://localhost:3000 to view it in the browser.

```sh
npm install
#
node --run dev
node --run test
node --run build <ENV>
```

# env
```.env
.env          # loaded in all cases
.env.[ENV]    # only loaded in specified ENV [ dev, test, prod ]
```
* .env.dev
* .env.prod
* .env.test
 
```env
PUBLIC_TITLE=dev
PUBLIC_LOGGER=true
PUBLIC_VIEW_TRANSITION=true
```