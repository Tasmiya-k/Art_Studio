import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useGetAllProductsQuery } from "../features/ProductApi";

export default function Shop() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("In Shop");

  console.log(data);

  return (
    <div className="">
      {isLoading ? (
        <p>isLoading....</p>
      ) : error ? (
        <p>an error occured</p>
      ) : (
        <>
          <Navbar />
          <div className="shop-main">
            {data.map((product) => {
              return (
                <Card
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.image}
                  desc={product.desc}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
