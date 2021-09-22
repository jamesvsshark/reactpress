## react-wordpress

Add react app simply to WordPress page

React dev experience improved with Webpack, Babel and Jest!

### Getting started

1. Setup with Docker

```
docker-compose up -d --build
```

2. Visit http://localhost:8000

3. Instal Wordpress (first time)

4. Create page and add shortcode 
```
    [react-app]
```

// Additionally...

Copy the ReactApp.php page templated into your theme directory and set this as the page layout to just get the full react app on the page.

5. Edit React code in ./wp-content/plguins/react-app/client

```
    // creates a non prod webpack with a watcher to recompile your dist build on changes
    yarn run start 

    // creates a prod webpack build
    yarn run build

    // run jest tests
    yarn run test
```


Happy coding! :)

