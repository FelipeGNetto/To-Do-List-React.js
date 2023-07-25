import React, { useEffect, useState } from "react";
import List from './componentes/List';
import Item from './componentes/Item.js';
import TodoForm from "./componentes/TodoForm";
import './Todo.css';
import Modal from "./componentes/modal";

const SAVED_ITEMS = "savedItems"


function Todo(){

    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items])

    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it]);
        onHideModal();
    }

    function onItemDeleted(item){
        let filteredItems = items.filter(it=>it.id != item.id)
        setItems(filteredItems)
    }

    function onHideModal(e){
        setShowModal(false)
    }

    return(
        <div className="container">
            <div className="box">
                <header className="header"><h1>To do List</h1> 
                <button onClick={() => {setShowModal(true)}} className="addBtn">+</button></header>

                <List onItemDeleted={onItemDeleted} items={items}></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>

            </div>
        </div>
    )

}

export default Todo;