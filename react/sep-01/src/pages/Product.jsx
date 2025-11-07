import { useEffect, useState } from "react";


function Product() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('http://localhost:5001/api/products/')
            .then(res => res.json())
            .then(data => {

                if (data.status) {
                    setProducts(data.products);
                    setLoading(false);
                }

            })

    }, []);


    if (loading) {
        return (
            <h1>Loading ... </h1>
        );
    }


    return (
        <div>
            <h1>Product Page</h1>

            <div className="container-fluid">
                <div className="row">
                    {
                        products.map(
                            product => <div className="col-4">{product.name}</div>
                        )
                    }
                </div>
            </div>
        </div>

    );
}


export default Product;