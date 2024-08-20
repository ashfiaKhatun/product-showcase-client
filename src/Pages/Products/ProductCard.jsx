
const ProductCard = ({product}) => {

    const {product_name, product_image, description, price, category, ratings, product_date_time} = product;


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-56 w-full"
                        src={product_image}
                        alt={product_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p className="text-sm">{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;