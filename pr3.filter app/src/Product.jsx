import React from 'react';

function Product({ category, filterdata, categoryButtonClick }) {
  return (
    <div className="container">
      
      <div className="btn-group mb-4" role="group" aria-label="Category filters">
        {category.map((cat, index) => (
          <button
            key={index}
            className="btn btn-outline-primary mx-1"
            onClick={() => categoryButtonClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="row">
        {filterdata.length > 0 ? (
          filterdata.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text text-muted text-center">{product.description}</p>
                  <div className="mt-auto">
                    <p className="card-text text-center">
                      <b>Category:</b> {product.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No products found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;