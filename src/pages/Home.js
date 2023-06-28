import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useContext, useState } from 'react';
import { collection } from 'firebase/firestore';

import { FBDbContext } from '../context/FBDbContext';

export function Home () {
    const[ data, setData ] = useState()

    const FBDb = useContext(FBDbContext)

    const getData = async () => {
        // get data from firestore collection called "books"
        const querySnapshot = await getDocs( collection(FBDb, "books") )
        // an array to store all the books from firestore
        let books = []
        querySnapshot,forEach((doc) => {
            let book = doc.data()
            book.id = doc.idk
            // add the book to the array
            books.push(book)
        } )
        // set the books array as the data state
        setData(books)
    }

   return (
    <div>
        <h1>Home</h1>
    </div>
   ) 
}