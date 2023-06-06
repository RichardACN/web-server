const http = require('http')

http.createServer((req, res)=>{

  /*   console.log(req);
    //res.writeHead(200,{'Content-Type':'application/json'})
    res.setHeader('Content-Disposition','attachment;filename=lista.csv');
    res.writeHead(200,{'Content-Type':'application/csv'})

   /*  const persona ={
        id:10,
        name:'Luis'
    }
 */
/*  */   // res.write('id', 'nombre \n')
    /* res.write('1', 'Fernando \n')
    res.write('2',' Ana \n')
    res.write('3',' Pedro \n')
    res.write('4', 'Jorge \n')
    res.write('5', 'Juan \n') */ 
   // res.write(JSON.stringify(persona))














    res.end();
}).listen(8080);

console.log('escuchando',8080)


