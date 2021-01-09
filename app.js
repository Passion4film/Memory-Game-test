document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
    {
        name: 'chichen-itza',
        img: 'images/chitchen-itza.jpg'
    },
    {
        name: 'chichen-itza',
        img: 'images/chitchen-itza.jpg'
    },
    {
        name: 'christ-the-redeemer',
        img: 'images/christ-the-redeemer.jpg'
    },
    {
        name: 'christ-the-redeemer',
        img: 'images/christ-the-redeemer.jpg'
    },
    {
        name: 'colosseum',
        img: 'images/colosseum.jpg'
    },
    {
        name: 'colosseum',
        img: 'images/colosseum.jpg'
    },
    {
        name: 'great-wall-of-china',
        img: 'images/great-wall-of-china.jpg'
    },
    {
        name: 'great-wall-of-china',
        img: 'images/great-wall-of-china.jpg'
    },
    {
        name: 'machu-pichu',
        img: 'images/machu-pichu.jpg'
    },
    {
        name: 'machu-pichu',
        img: 'images/machu-pichu.jpg'
    },
    {
        name: 'petra',
        img: 'images/petra.jpg'
    },
    {
        name: 'petra',
        img: 'images/petra.jpg'
    },
    ]

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()







})