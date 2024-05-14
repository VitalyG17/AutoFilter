class Filters {
  render() {
    const html = `
    <div class="filter-container">
    <div class="menu-accordion">
      <div class=".menu-accordion__item">
        <div data-tab="tab-1" class="menu-accordion__title">
          <span>＋</span>
          <label>Цена, €</label>
        </div>
        <div id="tab-1" class="accordion__content">
          <div class="price-filter">
            <div class="inputs">
              <label class="price-filter-price__label">
                <span class="price-filter-price__text">От</span>
                <input
                  type="number"
                  class="range-min"
                  id="priceFrom"
                  placeholder="500"
                />
              </label>

              <label class="price-filter-price__label">
                <span class="price-filter-price__text">До</span>
                <input
                  type="number"
                  class="range-max"
                  id="priceTo"
                  placeholder="50000"
                />
              </label>
            </div>
            <div class="range-slider">
              <div class="range-slider__progres"></div>
              <input
                type="range"
                id="priceRangeFrom"
                class="range-from"
                min="500"
                max="50000"
                value="500"
              />
              <input
                type="range"
                id="priceRangeTo"
                class="range-to"
                min="500"
                max="50000"
                value="50000"
              />
            </div>
          </div>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-2" class="menu-accordion__title">
          <span>＋</span>
          <label for="type">Тип транспорта</label>
        </div>
        <div id="tab-2" class="accordion__content">
          <select id="type">
            <option value="">Выберите тип транспорта</option>
            <option value="truk">Грузовик</option>
            <option value="bus">Автобус</option>
            <option value="universal">Универсал</option>
            <option value="sedan">Седан</option>
            <option value="suv">Внедорожник</option>
            <option value="сrossover">Кроссовер</option>
            <option value="hatchback">Хэтчбек</option>
          </select>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-3" class="menu-accordion__title">
          <span>＋</span>
          <label for="manufacturer">Производитель</label>
        </div>
        <div id="tab-3" class="accordion__content">
          <fieldset>
            <legend id="manufacturer"></legend>
            <input
              type="checkbox"
              id="volkswagen"
              name="manufacturer"
              value="volkswagen"
            />
            <label for="volkswagen">Volkswagen</label><br />
            <input type="checkbox" id="man" name="manufacturer" value="man" />
            <label for="man">Man</label><br />
            <input
              type="checkbox"
              id="mercedes-benz"
              name="manufacturer"
              value="mercedes-benz"
            />
            <label for="mercedes-benz">Mercedes benz</label><br />
            <input
              type="checkbox"
              id="scania"
              name="manufacturer"
              value="scania"
            />
            <label for="scania">Scania</label><br />
            <input
              type="checkbox"
              id="volvo"
              name="manufacturer"
              value="volvo"
            />
            <label for="volvo">Volvo</label><br />
            <input
              type="checkbox"
              id="iveco"
              name="manufacturer"
              value="iveco"
            />
            <label for="volvo">Iveco</label><br />
            <input
              type="checkbox"
              id="van-hool"
              name="manufacturer"
              value="van-hool"
            />
            <label for="volvo">Van Hool</label><br />
            <input
              type="checkbox"
              id="opel"
              name="manufacturer"
              value="opel"
            />
            <label for="volvo">Opel</label><br />
            <input
              type="checkbox"
              id="renault"
              name="manufacturer"
              value="renault"
            />
            <label for="volvo">Renault</label><br />
            <input
              type="checkbox"
              id="nissan"
              name="manufacturer"
              value="nissan"
            />
            <label for="volvo">Nissan</label><br />
            <input
              type="checkbox"
              id="audi"
              name="manufacturer"
              value="audi"
            />
            <label for="volvo">Audi</label><br />
            <input
              type="checkbox"
              id="ford"
              name="manufacturer"
              value="ford"
            />
            <label for="volvo">Ford</label><br />
            <input
              type="checkbox"
              id="fiat"
              name="manufacturer"
              value="fiat"
            />
            <label for="volvo">Fiat</label><br />
          </fieldset>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-4" class="menu-accordion__title">
          <span>＋</span>
          <label for="country">Страна местонахождения</label>
        </div>
        <div id="tab-4" class="accordion__content">
          <input
            type="text"
            id="country"
            list="countryList"
            placeholder="Выберите/введите страну"
          />
          <datalist id="countryList">
            <option value="Россия"></option>
            <option value="Китай"></option>
            <option value="Германия"></option>
            <option value="Япония"></option>
            <option value="Корея"></option>
          </datalist>
        </div>
      </div>
      <div class=".menu-accordion__item">
        <div data-tab="tab-5" class="menu-accordion__title">
          <span>＋</span>
          <label for="legend-kpp">Коробка передач</label>
        </div>
        <div id="tab-5" class="accordion__content">
          <fieldset>
            <legend id="legend-kpp"></legend>
            <input
              type="checkbox"
              id="automatic"
              name="transmission"
              value="automatic"
            />
            <label for="automatic">Автоматическая</label><br />
            <input
              type="checkbox"
              id="manual"
              name="transmission"
              value="manual"
            />
            <label for="manual">Механическая</label><br />
          </fieldset>
        </div>
      </div>
      <div class="accordion">
        <div data-tab="tab-6" class="menu-accordion__title">
          <span>＋</span>
          <label for="legend-ad-type">Тип объявления</label>
        </div>
        <div id="tab-6" class="accordion__content">
          <fieldset>
            <legend id="legend-ad-type"></legend>
            <input type="checkbox" id="sale" name="adType" value="sale" />
            <label for="sale">Продажа</label><br />
            <input
              type="checkbox"
              id="auction"
              name="adType"
              value="auction"
            />
            <label for="auction">Аукцион</label><br />
            <input
              type="checkbox"
              id="request"
              name="adType"
              value="request"
            />
            <label for="request">По запросу</label><br />
            <input
              type="checkbox"
              id="leasing"
              name="adType"
              value="leasing"
            />
            <label for="leasing">Лизинг</label><br />
            <input type="checkbox" id="rent" name="adType" value="rent" />
            <label for="rent">Сдается в аренду</label><br />
          </fieldset>
        </div>
      </div>
      <div class="container__button">
        <button id="applyFilters" onclick="applyFilters()">Применить</button>
      </div>
    </div>
  </div>
    `;

    ROOT_FILTERS.innerHTML = html;
  }
}

const filters = new Filters();
filters.render();

const titles = document.querySelectorAll('.menu-accordion__title');
const contents = document.querySelectorAll('.accordion__content');

titles.forEach((item) =>
  item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
      activeContent.classList.remove('active');
      item.classList.remove('active');
      activeContent.style.maxHeight = 0;
      item.querySelector('span').innerHTML = '＋';
      item.style.borderBottom = '1px solid #e8e9e8';
      activeContent.style.borderBottom = 'none';
    } else {
      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
      item.querySelector('span').innerHTML = '－';
      item.style.borderBottom = 'none';
    }
  })
);

document.addEventListener("DOMContentLoaded", function () {
  const priceFromInput = document.getElementById('priceFrom');
  const priceToInput = document.getElementById('priceTo');
  const rangeFrom = document.getElementById('priceRangeFrom');
  const rangeTo = document.getElementById('priceRangeTo');
  const rangeSliderProgress = document.querySelector('.range-slider__progres');

  function updateRangeSliderProgress() {
    const min = parseFloat(rangeFrom.value);
    const max = parseFloat(rangeTo.value);
    const percentageMin = ((min - parseFloat(rangeFrom.min)) / (parseFloat(rangeFrom.max) - parseFloat(rangeFrom.min))) * 100;
    const percentageMax = ((max - parseFloat(rangeTo.min)) / (parseFloat(rangeTo.max) - parseFloat(rangeTo.min))) * 100;

    rangeSliderProgress.style.left = `${percentageMin}%`;
    rangeSliderProgress.style.right = `${100 - percentageMax}%`;
  }

  function syncFromInput() {
    let fromValue = parseFloat(priceFromInput.value);
    let toValue = parseFloat(priceToInput.value);
    if (fromValue > toValue) {
      fromValue = toValue;
      priceFromInput.value = fromValue;
    }
    rangeFrom.value = fromValue;
    updateRangeSliderProgress();
  }

  function syncToInput() {
    let fromValue = parseFloat(priceFromInput.value);
    let toValue = parseFloat(priceToInput.value);
    if (toValue < fromValue) {
      toValue = fromValue;
      priceToInput.value = toValue;
    }
    rangeTo.value = toValue;
    updateRangeSliderProgress();
  }

  function syncRangeFrom() {
    let fromValue = parseFloat(rangeFrom.value);
    let toValue = parseFloat(rangeTo.value);
    if (fromValue > toValue) {
      fromValue = toValue;
      rangeFrom.value = fromValue;
    }
    priceFromInput.value = fromValue;
    updateRangeSliderProgress();
  }

  function syncRangeTo() {
    let fromValue = parseFloat(rangeFrom.value);
    let toValue = parseFloat(rangeTo.value);
    if (toValue < fromValue) {
      toValue = fromValue;
      rangeTo.value = toValue;
    }
    priceToInput.value = toValue;
    updateRangeSliderProgress();
  }

  priceFromInput.addEventListener('input', syncFromInput);
  priceToInput.addEventListener('input', syncToInput);
  rangeFrom.addEventListener('input', syncRangeFrom);
  rangeTo.addEventListener('input', syncRangeTo);

  updateRangeSliderProgress();
});

function applyFilters() {
  const priceFrom = document.getElementById('priceFrom').value;
  const priceTo = document.getElementById('priceTo').value;
  const selectedType = document.getElementById('type').value;
  const selectedManufacturers = Array.from(
    document.querySelectorAll(
      'input[type="checkbox"][name="manufacturer"]:checked'
    )
  ).map((input) => input.value);
  const country = document.getElementById('country').value;
  const selectedTransmission = Array.from(
    document.querySelectorAll(
      'input[type="checkbox"][name="transmission"]:checked'
    )
  ).map((input) => input.value);
  const selectedAdTypes = Array.from(
    document.querySelectorAll('input[type="checkbox"][name="adType"]:checked')
  ).map((input) => input.value);

  const filteredCards = LIST_AUTO.filter((card) => {
    let passPriceFilter = true;
    if (priceFrom && priceTo) {
      passPriceFilter =
        card.price >= parseInt(priceFrom) && card.price <= parseInt(priceTo);
    }

    const passTypeFilter =
      !selectedType ||
      card.classType.toLowerCase() === selectedType.toLowerCase();

    const passManufacturerFilter =
      selectedManufacturers.length === 0 ||
      selectedManufacturers.some((manufacturer) =>
        card.manufacturer.toLowerCase().includes(manufacturer)
      );

    const passCountryFilter =
      !country ||
      (card.country && card.country.toLowerCase() === country.toLowerCase());

    const passTransmissionFilter =
      selectedTransmission.length === 0 ||
      selectedTransmission.includes(card.transmissionType.toLowerCase());

    const passAdTypeFilter =
      selectedAdTypes.length === 0 ||
      selectedAdTypes.includes(card.adType.toLowerCase());

    return (
      passPriceFilter &&
      passTypeFilter &&
      passManufacturerFilter &&
      passCountryFilter &&
      passTransmissionFilter &&
      passAdTypeFilter
    );
  });

  const cards = new Cards();
  cards.render(filteredCards);
}


// function initializeRangeSlider() {
//   const range = document.querySelectorAll('.range-slider input');
//   const progress = document.querySelector('.range-slider__progres');
//   const inputValue = document.querySelectorAll('.price-filter-price__label input');

//   range.forEach((input) => {
//     input.addEventListener('input', () => {
//       let minrange = parseInt(range[0].value);
//       let maxrange = parseInt(range[1].value);

//       progress.style.left = (minrange / input.getAttribute('max')) * 1000 + '%';
//       progress.style.right = (1 - maxrange / input.getAttribute('max')) * 1000 + '%';

//       inputValue[0].value = minrange;
//       inputValue[1].value = maxrange;
//     });
//   });
// }
// initializeRangeSlider();
