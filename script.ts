// Create Parent Class (Locations)
class Locations {
  category: string;
  name: string;
  city: string;
  ZIPcode: number;
  address: string;
  teaserImage: string;
  constructor(category: string, name: string, city: string, ZIPcode: number, address: string, teaserImage: string) {
    this.category = category;
    this.name = name;
    this.city = city;
    this.ZIPcode = ZIPcode;
    this.address = address;
    this.teaserImage = teaserImage;
    locations.push(this);
  }
  startCard() {
  return`<div class="col-12 col-md-6 col-lg-4 card align-self-center mb-1 align-items-center">
  <div class="card" style="width: 20rem;">
  <img src="${this.teaserImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.category}: ${this.name}</h5>
    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>  ${this.address}<br>${this.ZIPcode},${this.city}</p>`
  }
  endDiv(){
    return `<a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`
}
display(){

  return this.startCard()+this.endDiv()
}
}

// Create Subclasses (Inheritance)
class Restaurant extends Locations {
  telNumber: number;
  type: string;
  web: string;
  constructor(category: string, name: string, city: string, ZIPcode: number, address: string, teaserImage: string, telNumber: number, type: string, web: string) {
    super(category, name, city, ZIPcode, address, teaserImage);
    this.telNumber = telNumber;
    this.type = type;
    this.web = web;}

  // Method for Restaurant
  startCard(){
return `${super.startCard()}
<p class="card-text">Type of cuisine:${this.type} </p>
<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>  ${this.telNumber} </p>
<p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
</svg>  ${this.web} </p> `
  }
}

class Events extends Locations {
  eventDate: string;
  eventTime: string;
  ticketPrice: number;
  constructor(category: string, name: string, city: string, ZIPcode: number, address: string, teaserImage: string, eventDate: string, eventTime: string, ticketPrice: number) {
    super(category, name, city, ZIPcode, address, teaserImage);
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.ticketPrice = ticketPrice;}

  // Method for Events
  startCard(){
    return `${super.startCard()}
    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check-fill" viewBox="0 0 16 16">
    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
  </svg>   ${this.eventDate} </p>
    <p class="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  </svg>   ${this.eventTime} </p>`}}

// Create Array of Locations
let locations: Array<Locations> = [];

// Create Places (push to locations array)
new Locations("Places", "Ankeruhr", "Vienna", 1010, "Hoher Markt 10-11", "img/Ankeruhr.jpg");
new Locations("Places", "Augarten", "Vienna", 1020, "Obere Augartenstraße1", "img/Augarten.jpg");
new Locations("Places", "Albertina", "Vienna", 1010, "Albertinaplatz 1", "img/Albertina.jpg");

// Create Restaurant
new Restaurant("Restaurant", "Regina Margherita", "Vienna", 1010, "Wallnerstraße 4", "img/Regina.jpg", 15330812, "Italian", "www.barbaro.at");
new Restaurant("Restaurant", "Demi Tass", "Vienna", 1040, "Prinz-Eugen-Straße 28", "img/Demi.jpg", 15330812, "Indian", "www.demitass.at");
new Restaurant("Restaurant", "Crossfield", "Vienna", 1010, "Maysedergasse 5", "img/Crossfield.jpg", 15330812, "Australian", "www.Crossfield.at");

// Create Events
new Events("Event", "Visit the Prater", "Vienna", 1020, "Prater.St 1", "img/Prater.jpg", "Sat, 16.10.2021", "08:30", 15);
new Events("Event", "Visit the Donaupark", "Vienna", 1210, "Prark.St 12", "img/Donaupark.jpg", "Mon, 06.12.2021", "12:30", 25.50);
new Events("Event", "Visit the University", "Vienna", 1020, "Welthandelspl.1", "img/uni.jpg", "Sun, 26.12.2021", "09:30", 12);
for (let x of locations){
  (document.getElementById("cardExample")as HTMLElement).innerHTML +=x.display();
}