window.addEventListener('DOMContentLoaded', function() {
    fetch('https://jschollitt.github.io/week9/bootstrapJSON/assets/data/cards.json')
        .then(response => response.json())
        .then(cards => {
            const cardContainer = document.getElementById('card-container');
            
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-4');
                cardElement.style.marginBottom = "20px";

                cardElement.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${card.image}" class="card-img-top" alt="${card.title}">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>`;

                    cardContainer.appendChild(cardElement);
            });
        })
        .catch(error => {
            console.error('Error fetchingJSON', error)
            document.getElementById('card-container').innerHTML = '<p class="text-danger">Failed to load cards.</p>';
        });
});