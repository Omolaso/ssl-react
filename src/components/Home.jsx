import React from 'react';
import HR from '../images/HR.jpg';
import management from '../images/management.png';
import Payroll from '../images/Payroll.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='container'>
        <section className='first-section'>
            <header className="header">
                <h2 id='bill'>Billings &#38; Accounts</h2>
            </header>

            <section className="human-resource">
                <div className="img">
                    <img src={HR} alt="HR"/>
                </div>
                <div className="text">
                    <h2>Human Resource Module</h2>
                    <p>Manage your human resource in <br/> one place with ease and do much more...</p>
                    <br/>
                    <p>For as low as</p>
                    <h1>N 40,000 NGN<span>per employer</span></h1>
                </div>
            </section>

            <section className="human-resource">
                <div className="img">
                <img src={Payroll} alt="Payroll"/>
                </div>
                <div className="text">
                    <h2>Payroll Module</h2>
                    <p>Manage your payroll and salary payment <br/> one place with ease and do much more...</p>
                    <br/>
                    <p>For as low as</p>
                    <h1>N 60,000 NGN<span>per employer</span></h1>
                </div>
            </section>


            <section className="human-resource">
                <div className="img">
                    <img src={management} alt="management"/>
                </div>
                <div className="text">
                    <h2>Leave Management Module</h2>
                    <p>Manage your human resource in <br/> one place with ease and do much more...</p>
                    <br/>
                    <p>For as low as</p>
                    <h1>N 30,000 NGN<span>per employer</span></h1>
                </div>
            </section>
        </section>

        <section className='second-section'>
        <div className="text">
                <h3>CloudletHR</h3>
                <p id="param">Industry tested no1 software solution for <br/> modern human resource providers <br/> over the world</p>
            </div>

            <div className="text pay">
                <h2>Paying</h2>
                <br/>
                <h1>N 40,000 NGN</h1>
                <br/>
                <p id="center">for 300 employees</p>
            </div>

            
            <button className="make"> Make Payment </button>

        </section>
    </div>
  )
}

export default Home
