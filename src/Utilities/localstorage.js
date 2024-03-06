const getStoredCard = ()=>{
    const storedCardString = localStorage.getItem('card')
    if (storedCardString){
        return JSON.parse(storedCardString)
    }
    return[];
}

const saveCardToLs = card =>{
    const cardStringified = JSON.stringify(card)
    localStorage.setItem('card', cardStringified);
}

const addToLS = id =>{
    const card = getStoredCard();
    card.push(id);
    //save to Local storage

    saveCardToLs(card);
}

const removeFromLS = id =>{
    const card = getStoredCard();
    const remaining = card.filter( idx => idx !== id);
    saveCardToLs(remaining);
}

export {addToLS, getStoredCard, removeFromLS}