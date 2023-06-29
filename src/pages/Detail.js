import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { FBDbContext } from '../context/FBDbContext';
import { FBStorageContext } from '../context/FBStorageContext';
import { AuthContect } from '../contexts/AuthContext';

import { doc, getDocs } from "firebase/firestore"; 

export function Detail( props ) {
    const[ bookData, setBookData ] = useState()

    let { bookId } = useParams() 

    const FBDb = useContext( FBDbContext)
    
    const bookRef = doc( FBDb, "books", bookId )
    
    const getBook = async () => {
        let book = await getDoc( bookRef )
        if( book.exists() ) {
        setBookData( book.data() )
    }
    else {
        // no books exists with the ID 
        }
    }

    useEffect( () => {
        if( !bookData ) {
            getBook( bookId )
        }
    })

    if (bookData) {
        return (
            <Container>
                <Row>
                    <Col>
                    <h2>{bookId}</h2>
                    </Col>
                <Col>Right</Col>
                </Row>
            </Container>
        )
    } 

    return (
        <Container>
            <Row>
                <Col>
                <h2>Loading</h2>
                </Col>
            </Row>
        </Container>
    )
}