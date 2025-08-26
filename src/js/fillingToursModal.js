import MicroModal from "micromodal";

import { tours } from "./exportTours";

tours.forEach(
  ({
    id,
    slider: [
      {
        images: [firstImage],
        content,
      },
    ],
    priceTour,
  }) => {
    const modalHTML = `
  <div
  class="modal-overlay-tours"
  id="modal-${id}"
  aria-hidden="true"
  data-custom-close>
  <div class="overlay-tours">
    <!-- swiper -->
    <div class="modal-tours-content">
      <button class="tours-close-btn" data-custom-close>
        <svg class="tours-modal-close-icon" width="15" height="15">
          <use href="/icon/symbol-defs.svg#icon-close-2"></use>
        </svg>
      </button>
      <!-- swiper-wrapper -->
      <div class="tour-block">
        <picture>
         <source
              srcset="${firstImage.srcsetDesc.x1} x1, ${
      firstImage.srcsetDesc.x2
    } x2"
              media="${firstImage.mediaDesc}" />
            <source
              srcset="${firstImage.srcsetTab.x1} x1, ${
      firstImage.srcsetTab.x2
    } x2"
              media="${firstImage.mediaTab}" />
            <source
              srcset="${firstImage.srcsetMob.x1} x1, ${
      firstImage.srcsetMob.x2
    } x2"
              media="${firstImage.mediaMob}" />
            <img
              class="bg-picture"
              src="${firstImage.src}"
              alt="${firstImage.alt}" />
        </picture>
        <div class="tour-content">
          <h4 class="tour-title">${content.title}</h4>
          <span class="numDay">${content.numDay}</span>
          <ul class="tours-modal-list">
        ${content.items
          .map(
            (item) => ` <li class="tours-modal-item">
              <p class="modal-tours-name">${item.name}</p>
            </li>`
          )
          .join("\n")}
          </ul>
        </div>
      </div>
    </div>
    <div class="price-block">
      <p class="price-tour-modal">UAH ${priceTour}/person</p>
      <button class="buy-tour">BOOK A TOUR</button>
    </div>
  </div>
</div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
  }
);

MicroModal.init({
  openTrigger: "data-custom-open",
  closeTrigger: "data-custom-close",
  disableScroll: true,
  awaitOpenAnimation: true,
  debugMode: false,
  disableOverlayClose: true,
});
