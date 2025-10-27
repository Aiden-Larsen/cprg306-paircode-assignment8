"use client";
import { useState } from "react";

import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import ItemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState([...ItemsData]);

    function handleAddItem(newItems) {
        if (newItems !== undefined) {
            setItems((oldItems) => [...oldItems, newItems])
            return items;
        } else {
            console.log(`Item ${newItems} is undefined`);            
        }
    }

    return (
        <main className="bg-blue-950 ">
            <div className="h-full flex justify-center items-center">
                <div className="justtify-self-start w-full m-5">
                    <section className="rounded bg-blue-500 p-2">
                        <NewItem onAddItem={handleAddItem}/>
                    </section>
                    <section className="rounded bg-blue-500">
                        <h1 className="text-2xl font-bold text-gray-900">Shopping List</h1>
                        <ItemList itemList={items}/>
                    </section>
                </div>
                <div className="usttify-self-start w-full m-5">
                    <h1></h1>
                    <MealIdeas ingredient={"chicken"}/>
                </div>
            </div>
        </main>
    )
}