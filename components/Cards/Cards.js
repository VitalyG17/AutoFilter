class Cards {
  render() {
    let htmlListAuto = '';
    const imgLocation = 'img/carbon_location.png';

    LIST_AUTO.forEach(
      ({ id, img, type, name, yearProd, weight, mileage, location, price }) => {
        const formattedMileage = mileage.toLocaleString();
        const formattedPrice = price.toLocaleString();
        htmlListAuto += `
          <li class="cards-element">
            <img class="cards-element__img" src="${img}" />
            <span class="cards-element__type">${type}</span>
            <span class="cards-element__name">${name}</span>
            <div class= "cards-element__sub-info">
              <span class="cards-element__yearProd">${yearProd}</span>
              <span class="cards-element__weight">${weight} kg</span>
              <span class="cards-element__mileage">${formattedMileage} km</span>
            </div>
            <div class="cards-element__details">
              <span class="cards-element__location"><img src="${imgLocation}"> ${location}</span>
              <span class="cards-element__price">${formattedPrice} €</span>
            </div>
          </li>`;
      }
    );

    const finishHtml = `
        <ul class="cards-container">
          ${htmlListAuto}
        </ul>`;

    ROOT_CARDS.innerHTML = finishHtml;
  }
}

const cards = new Cards();
cards.render();
