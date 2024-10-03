import express from "express";
import cors from "cors";

//SDK de Mercado Pago
import {MercadoPagoConfig, Preference} from "mercadopago";

const client = new MercadoPagoConfig({
    accessToken:"APP_USR-2208850955673580-100210-04e93b31d7c62c0f00dc65158ecb7a84-2014956485",
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> {
    res.send("soy el server")
});

app.post("/create_preference", async (req, res)=>{
    try{
        const body={
            items:[
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://barilocheturismo.gob.ar/es/home",
                failure: "https://barilocheturismo.gob.ar/es/home",
                pending: "https://barilocheturismo.gob.ar/es/home"
            },
            auto_return: "approved",
            // notification_url: ""
            
        };
        

        const preference = new Preference (client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia"
        });
    }
});

app.post("/webhook", async function (req, res){
    const paymentId = req.query.id;

    try {
        const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            method: 'GET',
            headers:{
                'Authorizaiton': `Bearer ${client.accessToken}`
            }
        });

        if(response.ok){
            const data = await response.json();
            console.log(data);
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('Error', error);
        res.sendStatus(500);
    }
})

app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`)

})

// vendedor
// user: TESTUSER900957323
// contra: Zy9sonmWon

// comprador: TESTUSER1300776324
// contra: ETI8teG09t

// tarjeta
// mastercard
// 5031 7557 3453 0604
//nombre: apro
// 123
// 11/25
// dni: 12345678

