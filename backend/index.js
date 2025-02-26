import express from 'express';
import axios from 'axios';


const app = express();
const port = 8080;

let apiData = null;


app.get('/', async (req, res) => {
    try {
        const accessToken = '1000.89bac2ace42888300f588be0811480c8.29b5d33391558bc4e24cb0be4af851ae';

        const headers = {
            'Content-Type': 'application/json',  // Specify the content type of the request body
            'Accept': 'application/json',
            'Authorization': `Zoho-oauthtoken ${accessToken}`, // Authorization header
        };

        console.log('headers:', headers);

        const response = await axios.get('https://www.zohoapis.in/creator/v2.1/data/krunallunagariya015/testing-visitor-registration/report/All_Visitor_Registrations', { headers });
        console.log('response:', response);
        console.log('response data:', response.data);
        apiData = response.data; // Store the API data in memory

        console.log('Data fetched and stored:', apiData);

        res.status(200).send('Data fetched and stored successfully.');

    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred while making API call.');
    }
});

app.get('/api/user', (req, res) => {
    if (apiData) {
        res.status(200).json(apiData);
    } else {
        res.status(404).send('No data found. Please fetch data first.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
