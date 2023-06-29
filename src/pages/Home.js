import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useContext, useEffect, useState } from 'react';
import { collection } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage"; 

import { FBDbContext } from '../context/FBDbContext';
import { FBStorageContext } from '../context/FBStorageContext';

import '../styles/Home.css' 

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
        if( data.length === 0 ) {
            getData()
        }
    })

    const Image = ( props ) => {
        const [imgPath, setImgPath] = useState()
        const imgRef = ref( FBStorage, book_cover/${ props.path } )
        getDownloadURL( imgRef ).then( (url) => console.log(url) )
        return(
            <Card.Img variant="top" src={imgPath} className="card-image"/> 
        )
    }

    const Columns = data.map( (book, key) => {
        return(
            <Col md="4" key={key}>
                <Card className="book-card">
                    <Image path={book.image} /> 
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title> 
                    </Card.Body>
                    <a href={"/detail/"} className="card-link"></a>
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