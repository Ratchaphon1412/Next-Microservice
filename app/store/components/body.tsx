"use client";
import { Card } from "@/app/store/components/card";
import Paginate from "@/app/store/components/paginate";
import { useState, useEffect } from "react";
import useApiBase from "@/lib/useApi";

type ObjectArray = {
  [key: string]: Array<any>;
};

type ObjectProduct = {
  [key: string]: ObjectArray;
};

type Products = {
  data: ObjectProduct;
};

export default async function Components() {
  const [data, setData] = useState<Products | null>(null);

  async function GetProducts() {
    const response = await useApiBase<Products>(
      process.env.NEXT_PUBLIC_BASEURL_PRODUCT + "/public/graphql",
      {
        method: "POST",
        body: JSON.stringify({
          query: `{
          products(first:10,page:1) {
            data{
              id
              name
              description
              price
              gender
              images{
                path
              }
              colors{
                hex_color
              }
              category {
                name
              }
            },
            paginatorInfo{
              hasMorePages,
              total,
              currentPage,
              lastPage
            }
            
          }
        }`,
        }),
      }
    );
    if (response != null) {
      console.log(response);
      setData(response);
    }
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <div className=" rounded-2xl mx-8  ">
      <div className="relative grid grid-cols-3 gap-6 ">
        {data?.data.products.data.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              colors={product.colors}
            />
          );
        })}
      </div>
    </div>
  );
}
