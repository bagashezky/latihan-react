import { Container } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'
import {SearchIcon} from '@mui/icons-material/Search';
// import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';

export default function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='intro'>
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <h1 className='tx-main1'>Temukan data Ketahanan Pangan di Jawa Barat dengan cepat, tepat, dan akurat</h1>
          <h2 className='tx-main2'>Mulai dari stok, harga, hingga distribusi semuanya ada disini!
            Dari data beras, bawang merah, hingga daging sapi  bisa kamu temukan hanya dengan satu kali klik!</h2>
          <div className="SearchIcon">
          <i class="SearchIcon"></i>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              <List />
          </div>
        </Container>
      </div>
    </div>
  )
}
