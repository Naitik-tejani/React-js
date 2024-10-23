import React from 'react'
import '../parts/Assetes/css/Menu.css'

export default function Menu() {
  return (
    <>
    <div className="container d-flex justify-content-between filter-section">

        

        <div className="col-4">
            <div className="filterBox">
                <button className="filter-btn"><p>Cake & Milk</p>
                    <span>(69 items)</span>
                </button>
                <button className="filter-btn"><p>Fresh Meat</p>
                    <span>(30 items)</span>
                </button>
                <button className="filter-btn"><p>Vegetables</p>
                    <span>(25 items)</span>
                </button>
                <button className="filter-btn"><p>Apple & Mango</p>
                    <span>(45 items)</span>
                </button>
                <button className="filter-btn"><p>Strawberry</p>
                    <span>(68 items)</span>
                </button>
                <button className="filter-btn"><p>View More</p></button>
            </div>
        </div>

      
        <div className="col-4">
            <div className="filterImg position-relative">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/3.jpg" alt="category1" />
                <h2 className="img-title">33% off</h2>
                <h3 className="img-subtitle">Cake</h3>
                <button className="shop-now-btn1">Shop Now</button>
            </div>
        </div>

      
        <div className="col-4">
            <div className="filterImg1 position-relative">
                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/4.jpg" alt="category2" />
                <h2 className="img-title">33% off</h2>
                <h3 className="img-subtitle">Milk</h3>
                <button className="shop-now-btn1">Shop Now</button>
            </div>
        </div>
    </div>
</>   
  )
}
