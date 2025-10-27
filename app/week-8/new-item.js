"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);    // holds amount in quantity
    const [name, setName] = useState("");   // holds name
    const [category, setCategory] = useState("Produce");
    const [incDisabled, setIncDisabled] = useState(false);    // holds state of buttons
    const [decDisabled, setDecDisabled] = useState(true);

    // qunatity + 1
    const increment = () => {
        setQuantity(quantity + 1);
        buttonSwitch(1);       
    }

    // quantity - 1
    const decrement = () => {
        setQuantity(quantity - 1);
        buttonSwitch(2);
    }

    // buttonSwitch works to enable/disable both button depending on the amount in quantity
    const buttonSwitch = (button) => {
        if (button == 1) {  // 1 = increment
            if (quantity+1 >= 20) {
                setIncDisabled(true);
            } else if (quantity+1 < 20) {
                setIncDisabled(false);   // if quantity is incremented than re-enable decrement
                setDecDisabled(false);
            }
        } else if (button == 2) {   // 2 = decrement
            if (quantity-1 <= 1) {
                setDecDisabled(true);
            } else if (quantity-1 > 1) {
                setDecDisabled(false);   // if quantity is decremented than re-enable increment
                setIncDisabled(false);
            }
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        /*
        * creates object of the item's values *
        */
        let item = {
            id: randID(16),
            name: name,
            quantity: quantity,
            category: category,
        };
        // logs the individual values to the console
        console.log(`${item.name}, ${item.quantity}, ${item.category}`);
        // sends alert to user listing values
        onAddItem(item);
        // resets values to initial
        setName(""), setQuantity(1), setCategory("produce"), setDecDisabled(true), setIncDisabled(false);
    }

    const randID = (length) => {
        const chars = "ABDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newID = "";
        for (let i = 0; i < length; i++) {
            newID += chars.charAt(Math.random() * chars.length);
        }
        return newID;
    }

    return (
        <form onSubmit={handleSubmit} className="rounded bg-blue-400 gap-3 p-2">
            <section>
                <section className="rounded bg-blue-300 p-2">
                    <div>
                        <label htmlFor="name" className="block font-bold text-gray-600 p-1">Item Name</label>
                        <input 
                        id="name"
                        type="text" 
                        placeholder="e.g. bread: 1, Bakery" 
                        required 
                        value={name} 
                        onChange={handleNameChange} 
                        className="rounded border border-gray-600 text-gray-500 bg-blue-200 p-2"
                        ></input>
                    </div>
                </section>
                <section className="rounded bg-blue-300 p-2">
                    <div className="p-1 mb-2">
                        <p className="text-gray-600 font-bold">Quantity (1-20)</p>
                    </div>
                    <section className="flex gap-3">
                        <div>
                            <button
                            className="rounded text-m font-bold px-4 py-2 bg-blue-200 text-gray-600 active:bg-blue-50 disabled:bg-gray-400"
                            type="button"
                            onClick={increment}
                            disabled={incDisabled}
                            > + </button>
                        </div>
                        <div>
                            <button
                                className="rounded text-m font-bold px-4 py-2 bg-blue-200 text-gray-600 active:bg-blue-50 disabled:bg-gray-400"
                                type="button"
                                onClick={decrement}
                                disabled={decDisabled}
                            > - </button>
                        </div>
                    </section>
                    <section>
                        <div className="flex rounded bg-blue-300 p-2">
                            <p className="rounded text-gray-600 text-xl font-bold bg-blue-200 px-4 py-2">Current: {quantity}</p>
                        </div>
                    </section>
                </section>
                <section className="rounded bg-blue-300 p-2">
                    <div>
                        <label htmlFor="category" className="block text-gray-600 font-bold p-1">Category</label>
                        <select 
                        id="category"
                        value={category}
                        onChange={handleCategory} 
                        className="rounded border border-gray-600 text-gray-500 bg-blue-200 p-2">
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </section>
                <section className="rounded bg-blue-300 p-2">
                    <button 
                    type="submit"
                    className="rounded text-m font-bold px-4 py-2 bg-blue-200 text-gray-600 active:bg-blue-50"
                    >Add Item</button>
                </section>
            </section>
        </form>
    )
}