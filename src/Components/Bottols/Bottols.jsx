import React, { useEffect, useState } from 'react';
import Bottol from '../Bottol/Bottol';
import './Bottols.css';
import { addToLS, getStoredCard, removeFromLS } from '../../Utilities/localstorage';

const Bottols = () => {
    const [bottols, setBottols]= useState([])

    const [card, setCard]= useState([]);

    useEffect(()=>{
        fetch('bottol.json')
        .then(res => res.json())
        .then(data => setBottols(data))
    },[])

    // load card from localStorage

    useEffect(()=>{
        if (bottols.length>0){
             const storedCard = getStoredCard();
            console.log(storedCard, bottols);

            const saveCard = [];
            for(const id of storedCard){
                console.log(id);
                const bottle = bottols.find(bottol => bottol.id === id)
                if(bottle){
                    saveCard.push(bottle)
                }
            }
            console.log(saveCard);
            setCard(saveCard);
        }
    },[bottols])

    const handleAddtoCard = bottol => {
        const newAddtoCard = [...card, bottol];
        setCard(newAddtoCard);

        //localstorage:
        addToLS(bottol.id);
    }


    const handleRemoveToCard = id =>{

        //remove from web
        const remaingCard = card.filter(bottle => bottle.id !== id);
        setCard(remaingCard);


        //remove from Ls
        removeFromLS(id);
    }

    return (
        <div >
            <h2>bottols {bottols.length}</h2>
            <div>
                <h1>card list: {card.length}</h1>
                <ul>
                {
                    card.map(bottol => <li key={bottol.id}>{bottol.brand}</li>)
                }
                </ul>
                
            </div>

            <div className='bottol-container'>
            {
                bottols.map(bottol => <Bottol key={bottol.id} handleRemoveToCard={handleRemoveToCard} handleAddtoCard={handleAddtoCard}bottol={bottol}></Bottol>)
            }
            </div>
        </div>
    );
};

export default Bottols;