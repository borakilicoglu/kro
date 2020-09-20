import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import { products } from "../../../@fake-db/inventory/inventory";

export default function Inventory(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  React.useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const productList = searchResults.map((product, index) => (
    <tr className="border-b hover:bg-gray-100 cursor-pointer" key={index}>
      <td className="pl-8 py-4">
        <div className="flex items-center">
          <div className="rounded border px-2">
            <img
              src={require("../../../assets/images/apps/ecommerce/products/watch-01-01.jpg")}
              alt={product.name}
              className="w-8"
            />
          </div>
          <div className="ml-8">{product.sku}</div>
        </div>
      </td>
      <td className="px-4 py-4">{product.name}</td>
      <td className="px-4 py-4">${product.price}</td>
      <td className="pr-8 pl-4 py-4">
        <div className="flex items-center">
          <span>{product.stock}</span>
          <span className="flex items-end ml-2 w-1 h-4 bg-red-200 rounded overflow-hidden ng-tns-c159-193 ng-star-inserted">
            <span className="flex w-full h-1/3 bg-red-600 ng-tns-c159-193"></span>
          </span>
        </div>
      </td>
      <td className="pr-8 pl-4 py-4">
        {product.active ? (
          <Icon color="primary" style={{ color: "#31c48d" }} fontSize="small">
            check
          </Icon>
        ) : (
          <Icon color="primary" style={{ color: "#97a6ba" }} fontSize="small">
            close
          </Icon>
        )}
      </td>
      <td className="pr-8 pl-4 py-4">
        <button className="bg-white hover:bg-gray-200 text-gray-600 border rounded rounded inline-flex items-center px-2 py-1">
          <Icon fontSize="small">expand_more</Icon>
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div className="flex bg-white w-full px-8 py-10">
        <h2 className="text-3xl font-bold pb-0">Inventory</h2>
        <div className="flex ml-auto items-center">
          <div className="relative">
            <input
              onChange={handleChange}
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 pr-4 pl-10 block w-full appearance-none leading-normal"
              type="email"
              placeholder="Search products"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                className="fill-current pointer-events-none text-gray-600 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
            <Icon fontSize="small">add</Icon>
            <span className="ml-2">Add</span>
          </button>
        </div>
      </div>
      <div>
        <table className="table-auto w-full bg-white border-t">
          <thead className="text-xs text-gray-600 bg-gray-100">
            <tr className="border-b text-left">
              <th className="pl-24 py-4 font-medium">
                <span className="ml-4">SKU</span>
              </th>
              <th className="px-4 py-4 font-medium">Name</th>
              <th className="px-4 py-4 font-medium">Price</th>
              <th className="px-4 py-4 font-medium">Stock</th>
              <th className="px-4 py-4 font-medium">Active</th>
              <th className="px-4 py-4 font-medium">Details</th>
            </tr>
          </thead>
          <tbody>{productList}</tbody>
        </table>
      </div>
    </div>
  );
}
