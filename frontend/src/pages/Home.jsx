import React,{useEffect,useState } from 'react'
import axios from 'axios';
import Spinner from '../componets/Spinner';
import { Link } from 'react-router-dom';
import{ AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox,MdoutlineDelete } from 'react-icons/md';


const Home = () => {
    const[books,setBooks]=useState([]);
    const[loading, setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        axios
        .get('http://localhost:5555/books')
        .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            });

 },[]);
    return (
    <div className='p-4'>
        <div classNmae='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
        </div>
    </div>
  )
}
export default Home