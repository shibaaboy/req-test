import React, { useEffect, useState } from "react";

function Products() {

  const [item, setItem] = useState([])

  useEffect(() => {
    fetch('http://45.9.24.31/strapi/product-categories')
      .then(response => response.json())
      .then((data) => {
        setItem(data)
      })
  }, [])

  return (
    <div className="flex flex-wrap flex-row justify-center items-center self-center gap-[20px] mt-[20px]"> 
      {item.map((el) => {
        return (
          el.products.map((product, i) => {
            return (
              <div key={i} className="flex flex-column justify-center items-center self-center w-[250px] h-[100px] p-[15px] border-solid border-2 border-silver">
                <p className="oldstyle-nums text-sky">{product.id} {product.title}</p>
              </div>
            )
          }))
      })}
    </div>
  )
}

export default Products;