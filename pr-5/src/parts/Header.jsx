import React from 'react'

export default function Header() {
  return (
    <div>

      {/* hader start  */}


      <nav className="navbar navbar-expand-lg " style={{ margin: "15px 0 7px ",borderTop:"1px solid gray" }}>
        <div className="container">
          <button style={{border: "1px solid #e9e9e9",borderRadius:"5px",width:"35px",height:"35px",backgroundColor:"white"}}><i class="fa-solid fa-bars-staggered"></i></button>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="col-4">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:"0px 0px 0px 40px "}}>
                <li className="nav-item">
                  <a class="nav-link active" style={{margin:"0px 7px"}} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" style={{margin:"0px 7px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Category
                  </a>
                  <ul className="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" style={{margin:"0px 7px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Products
                  </a>
                  <ul className="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" style={{margin:"0px 7px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" style={{margin:"0px 7px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" style={{margin:"0px 7px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Elemenet
                  </a>
                  <ul className="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>

                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>

          <div className="col-4">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a class="nav-link active" style={{margin:"0px 7px"}} aria-current="page" href="#"> <i class="fa-solid fa-phone" style={{marginRight:"5px"}}></i>+123 ( 456 ) ( 7890 )</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>



      {/* hader end  */}

    </div>
  )
}

