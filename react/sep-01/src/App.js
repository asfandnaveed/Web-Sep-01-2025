import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid bg_image">
      {/* Row 1 */}
      <div className="row">
        <div className="col-4 d-flex flex-column justify-content-center left-side ps-5">
          <div className="heading">Healthy Veg Outlet</div>
          <div className="d-flex border p-1 rounded-pill w-75 justify-content-between">
            <button className="btn btn-success rounded-start-pill">Location</button>
            <div className="text-white ms-2 mt-2">Search</div>
            <div className="bg-warning  p-2 rounded-circle">
              <i className="bi bi-search" />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Row 2 */}
      <div className="row product_background p-3">
        <div className="col-3 d-flex align-items-center">
          <img src="assets/images/product/1.png" alt="" className="img-fluid" />
          <div>
            <div className="h4 text-white">Sandwich</div>
            <div className="text-white">Rs 500</div>
            <button className="btn btn-secondary btn-sm">Order Now</button>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center ">
          <img src="assets/images/product/2.png" alt="" className="img-fluid" />
          <div>
            <div className="h4 text-white">Pizza</div>
            <div className="text-white">Rs 700</div>
            <button className="btn btn-secondary btn-sm">Order Now</button>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center ">
          <img src="assets/images/product/3.png" alt="" className="img-fluid" />
          <div>
            <div className="h4 text-white">Biryani</div>
            <div className="text-white">Rs 300</div>
            <button className="btn btn-secondary btn-sm">Order Now</button>
          </div>
        </div>
        <div className="col-3 d-flex align-items-center ">
          <img src="assets/images/product/4.png" alt="" className="img-fluid" />
          <div>
            <div className="h4 text-white">Burger</div>
            <div className="text-white">Rs 450</div>
            <button className="btn btn-secondary btn-sm">Order Now</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
