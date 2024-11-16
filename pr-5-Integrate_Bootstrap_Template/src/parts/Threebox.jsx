import React from 'react'
import './Assetes/css/Threebox.css'

export default function Threebox() {
  return (
    <div>
      
        <section className='box'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="first-box">
                            <h3>Fresh & Healthy <br /> Organic Fruits</h3>
                            <h4><span>35% </span>off on first order</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="first-box">
                            <h3>Healthy <br />Bakery Products</h3>
                            <h4><span>30% </span>off on first order</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="first-box">
                            <h3>Fresh <br /> Shacks & Sweets</h3>
                            <h4><span>20% </span>off on first order</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
