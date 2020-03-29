let express = require('express');
let app = express();

const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');

const swaggerOptions={
    swaggerDefinition: {
        info: {
            title: 'Welcome',
            description: "Hi, everyone",
            version: "1.0.0",
            contact: {
                name: "Cao Thanh Ngan",
                email: "17521308@gm.uit.edu.vn",
            },
            servers: ["ngann--web-server.herokuapp.com"]
        }
    },
    apis: ["server.js"]
};
const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

// Bătddaufw viết api doc nay

/**
 * @swagger
 * /:
 *  get:
 *      summary: ...
 *      description: ...
 *      produces:
 *          - application/json
 *      responses:
 *          '200': 
 *              description: ....
 *     
 */
let port = process.env.PORT || 3000;

app.get('/', ( req, res) => { res.send("Hello!!!")})
// Browser will send request to server and if the URL is matches, server will return the response. 

app.listen(port), () => { console.log('Do you love me?')}

console.log('RESTful API server started on: ' + port);

// "npm i node -g" : Can edit anything and don't need to eixt. After that, just CtrS to save it. 

// Remember to CtrS before run.

//"start": "nodemon server.js" : Ran by syntax: npm start