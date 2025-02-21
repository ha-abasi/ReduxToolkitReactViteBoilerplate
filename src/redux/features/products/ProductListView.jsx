import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "./remoteProductSlice.js";

export default function ProductListView() {
    const loading = useSelector(state => state.remote_products.loading);
    const error = useSelector(state => state.remote_products.error);
    const products = useSelector(state => state.remote_products.products);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    return (
        <div style={{textAlign: "left"}}>
            <h3>Product List :</h3>
            { loading && <p>Loading...</p> }
            { error && <p>Error: {error}</p> }
            { !loading && products.length === 0 && <p>No products found.</p> }
            { products.length > 0 &&
                <ul>
                    { products.map(it => <li key={it.title}>{it.title}</li>) }
                </ul>
            }

        </div>
    )
}
