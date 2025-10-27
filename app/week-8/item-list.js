"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ itemList }) {
    const [sortBy, setSortBy] = useState("name");
    // const [items] = useState(itemList);

    // function listSort(event) {
    //     const newEventSort = event.target.value;
    //     setSortBy(newEventSort);

    //     if (newEventSort == "name") {
    //         items.sort((a,b) => a.name.localeCompare(b.name));
    //     } else if (newEventSort == "category") {
    //         items.sort((a,b) => a.category.localeCompare(b.category));
    //     }

    //     console.log(`sorted by: ${sortBy}`)
    // }
    const listSort = [...itemList].sort((a,b) => {
        if( sortBy === "name") {
            if (a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        } else if (sortBy === "category") {
            if (a.category < b.category) return -1;
            if(a.category > b.category) return 1;
            return 0;
        }
    });

    return (
        <div className="rounded bg-blue-400 p-2">
            <div className="p-2">
            <label className="rounded text-xl font-bold text-gray-800 p-2">Sort By:</label>
                <section className="flex flex-row text-gray-800 gap-4 p-2">

                    <button 
                    name="button"
                    id="sortName"
                    value="name" 
                    onClick={() => setSortBy("name")}
                    className="rounded border-2 border-white bg-blue-300 p-2 my-2 hover:bg-amber-200 active:bg-amber-500"
                    >Name</button>

                    <button
                    name="button"
                    id="sortCategory"
                    value="category" 
                    onClick={() => setSortBy("category")}
                    className="rounded border-2 border-white bg-blue-300 p-2 my-2 hover:bg-amber-200 active:bg-amber-500"
                    >Category</button>

                </section>


            </div>
            
            <ul id="itemList" className="rounded border-2 border-white bg-blue-300 text-gray-800 p-2">
                {listSort.map((item) => { return (
                    <Item name={item.name} quantity={item.quantity} category={item.category} key={item.id}/>
                )})}
            </ul>
        </div>        
    )
}