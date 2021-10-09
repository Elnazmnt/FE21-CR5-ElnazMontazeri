"use strict";
// Create Parent Class (Locations)
class Locations {
    constructor(category, name, city, ZIPcode, address, teaserImage) {
        this.category = category;
        this.name = name;
        this.city = city;
        this.ZIPcode = ZIPcode;
        this.address = address;
        this.teaserImage = teaserImage;
        locations.push(this);
    }
    startCard() {
        return `<div class="col-12 col-md-6 col-lg-3 card align-self-center mb-1 align-items-center">
  <div class="card" style="width: 18rem;">
  <img src="${this.teaserImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.category}: ${this.name}</h5>
    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>  ${this.address}<br>${this.ZIPcode},${this.city}</p>`;
    }
    endDiv() {
        return `<a href="#" class="btn btn-success float-end"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
  </svg></a>
    </div>`;
    }
    display() {
        return this.startCard() + this.endDiv();
    }
}
// Create Subclasses (Inheritance)
class Restaurant extends Locations {
    constructor(category, name, city, ZIPcode, address, teaserImage, telNumber, type, web) {
        super(category, name, city, ZIPcode, address, teaserImage);
        this.telNumber = telNumber;
        this.type = type;
        this.web = web;
    }
    // Method for Restaurant
    startCard() {
        return `${super.startCard()}
<p class="card-text">Type of cuisine: ${this.type} </p>
<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  +43 ${this.telNumber} </p>
<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg>  ${this.web} </p> `;
    }
}
class Events extends Locations {
    constructor(category, name, city, ZIPcode, address, teaserImage, eventDate, eventTime, ticketPrice) {
        super(category, name, city, ZIPcode, address, teaserImage);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    // Method for Events
    startCard() {
        return `${super.startCard()}
    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>   ${this.eventDate} </p>
    <p class="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  </svg>   ${this.eventTime} </p>
  <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
</svg>   ${this.ticketPrice} </p>`;
    }
}
// Create Array of Locations
let locations = [];
// Create Places (push to locations array)
new Locations("Places", "Ankeruhr", "Vienna", 1010, "Hoher Markt 10-11", "img/Ankeruhr.jpg");
new Locations("Places", "Augarten", "Vienna", 1020, "Obere Augartenstraße1", "img/Augarten.jpg");
new Locations("Places", "Albertina", "Vienna", 1010, "Albertinaplatz 1", "img/Albertina.jpg");
new Locations("Places", "360° Ocean Sky", "Vienna", 1060, "Fritz-Grünbaum-Platz 1 ", "img/Wien.jpg");
// Create Restaurant
new Restaurant("Restaurant", "Margherita", "Vienna", 1010, "Wallnerstraße 4", "img/Regina.jpg", 15330812, "Italian", "www.barbaro.at");
new Restaurant("Restaurant", "Demi Tass", "Vienna", 1040, "Prinz-Eugen-Straße 28", "img/Demi.jpg", 15330812, "Indian", "www.demitass.at");
new Restaurant("Restaurant", "Crossfield", "Vienna", 1010, "Maysedergasse 5", "img/Crossfield.jpg", 15330812, "Australian", "www.Crossfield.at");
new Restaurant("Restaurant", "American Diner", "Vienna", 1060, "Gumpendorfer Str.63A", "img/Teddy.jpg", 17104249, "American ", "www.teddys-diner.com");
// Create Events
new Events("Event", "Visit the Prater", "Vienna", 1020, "Prater.St 1", "img/Prater.jpg", "Sat, 16.10.2021", "08:30", 15);
new Events("Event", "Visit the Donaupark", "Vienna", 1210, "Park.St 12", "img/Donaupark.jpg", "Mon, 06.12.2021", "12:30", 25.50);
new Events("Event", "Visit the University", "Vienna", 1020, "Welthandelspl.1", "img/uni.jpg", "Sun, 26.12.2021", "09:30", 12);
new Events("Event", "Sophisticated Party", "Vienna", 1010, "Passage Opernring-Gasse", "img/Party.jpg", "Sun, 26.12.2021", "20:30", 50);
for (let x of locations) {
    document.getElementById("cardExample").innerHTML += x.display();
}
