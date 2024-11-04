// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

  
  export default function App() {
    return (
      <div>
        <h1>Best technology</h1>

        <Product 
          name="Effect"
          imgUrl="https://slp-statics.astockcdn.net/static_assets/staging/22spring/free/storytelling-blade/Card1_332683247.jpg?width=580&format=webp"
          price={10.99}
        />
        <Product 
          name="Chime"
          imgUrl="https://as1.ftcdn.net/v2/jpg/00/34/83/18/1000_F_34831856_yqmKQfXMH5LNOOdLwrtmKAYC8rDstmji.jpg"
          price={14.29}
        />
      </div>
    );
  }
