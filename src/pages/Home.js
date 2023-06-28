import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useContext, useEffect, useState } from 'react';
import { collection } from 'firebase/firestore';
import { ref } from "firebase/storage"; 

import { FBDbContext } from '../context/FBDbContext';
import { FBStorageContext } from '../context/FBStorageContext';

export function Home () {
    const[ data, setData ] = useState()

    const FBDb = useContext(FBDbContext)
    const FBStorage = useContext( FBStorageContext )

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
        // console.log(books)
    }

    useEffect( () => {
        if( !data ) {
            getData()
        }
    })

    const Columns = data.map( (book, key) => {
        return(
            <Col md="4" key={key}>
                <Card>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>  
                    </Card.Body>
               </Card>
            </Col>
        )
    })
   return (
        <Container>
            <Row>
                {Columns}
            </Row>
        </Container> 
         ) 
   } 