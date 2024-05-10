import express from 'express';
import { getBook } from '../controller/book.con.js';

const router=express.Router();

router.get('/',getBook);

export default router;