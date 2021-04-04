import './App.css';
import React, { useEffect, useState } from 'react';
import { FETCH_DATA } from './api/Api';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  /*use State */
  const [info, setInfo] = useState({});
  const [date, setDate] = useState(new Date());

  const fetchData = async (date) => {
    const { data } = await FETCH_DATA(date);

    setInfo(data);
  };

  const handleDate = (d) => {
    setDate(d);
    setInfo({});
    fetchData(d);
  };
  /*fetch data on initial render */
  useEffect(() => {
    fetchData(date);
  }, [date]);
  return (
    <>
      {/*navbar */}
      <nav className='navbar'>
        <div>
          <h2>
            <a href='#1'>
              NASA <i className='fas fa-user-astronaut'></i>
            </a>
          </h2>
        </div>
        <div>
          <ul>
            <li>
              <a href='#2'>Home</a>
            </li>
            <li>
              <a href='#3'>About</a>
            </li>
            <li>
              <a href='#4'>Blog</a>
            </li>
            <li>
              <a href='#5'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {Object.keys(info).length > 0 ? (
        <>
          {/*section for image and info */}
          <section className='data-section'>
            <div className='date-section'>
              <h2>Select Date :</h2>
              <DatePicker
                selected={date}
                onChange={(date) => handleDate(date)}
                dateFormat='yyyy-MM-dd'
                maxDate={new Date()}
              />
            </div>
            <div className='graphic-section'>
              <div className='image-section'>
                {info.hdurl ? (
                  <img src={info.hdurl} alt={Math.random()} />
                ) : (
                  <div>
                    <h3>Sorry No Image Available!! 🤕</h3>
                  </div>
                )}
              </div>
              <div className='content'>
                <h2>{info.title}</h2>
                <small> Date : {info.date}</small>
                <p>{info.explanation}</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div
          style={{
            width: '100%',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1 style={{ fontSize: '4rem' }}>LOADING DATA.....</h1>
        </div>
      )}
    </>
  );
}

export default App;
