const updateButton = document.querySelector('#update-button');

updateButton.addEventListener('click', _ => {
    fetch('/quotes',{
        method: 'put'
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find your lack of faith disturbing.'
    })
})