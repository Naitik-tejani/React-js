import React from 'react'
import '../parts/Assetes/css/Product.css'

export default function Product() {
    return (
        <div>

            <section className='product'>
                <div className="container">
                    <div className="row">

                        <div className="product-title">
                            <h3>Popular Products</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem id sed repellat <br /> mollitia hic dignissimos sapiente? </p>
                        </div>

                        <div className="col-3">
                            <div className="product-menu">
                                <ul style={{ padding: "0" }}>
                                    <li>All <i class="fa-solid fa-arrow-right" style={{ marginLeft: "240px" }}></i></li>
                                    <li>Snack <i class="fa-solid fa-arrow-right" style={{ marginLeft: "215px" }}></i></li>
                                    <li>Vegetable <i class="fa-solid fa-arrow-right" style={{ marginLeft: "185px" }}></i></li>
                                    <li>Fruit <i class="fa-solid fa-arrow-right" style={{ marginLeft: "223px" }}></i></li>
                                    <li>Bakery <i class="fa-solid fa-arrow-right" style={{ marginLeft: "207px" }}></i></li>
                                </ul>

                                <div className="product-banner">
                                    <h3>Juicy</h3>
                                    <h2>FRUITS</h2>
                                    <p>100% Natural</p>
                                    <button>Shop New</button>
                                </div>

                            </div>
                        </div>

                        <div className="col-9">

                      
                                <div className="col-3">
                              
                                </div>
                          

                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
