import axios from 'axios';
//import { response } from 'express';

// axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response=>{console.log(response.data)}).catch(error=>console.error(error));

export default axios.create({
baseURL:'https://jsonplaceholder.typicode.com'

});