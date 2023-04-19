const express =require('express');
const app = express();
const port= process.env.port | 3000;

app.get('/',(req,res) => res.send('server is working'));
app.listen(port,()=>console.log('Server listening at port'+port));
