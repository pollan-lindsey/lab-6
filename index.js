
const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ]

//set constructor function to be about the cities
//this.parameters of above function = city?
//change constructor function to const <name> = new <name>('parameters')
//each city has: customers per hour, cookies per hour
//find a function that they all have
//use common properties as parameter for object?

//objects need to be created with Object.create

//this.customersPerHour.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
function City (maxCust, minCust, theAvgCookie, cookiesPH, customersPH, totalDC){
    this.maxCustomers = maxCust;
    this.minCustomers = minCust;
    this.avgCookie = theAvgCookie;
    this.cookiesPerHour = cookiesPH;
    this.customersPerHour = customersPH;
    this.totalDailyCookies = totalDC;
//figure out customers per hour
this.calCustomersPH = function(){
            //calculate customers
            for(i=0; i < hours.length; i++){
                let customersPH = hours[i]
           this.customers.push((Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1) * this.minCustomers)));
            }
            //this.customersPerHour refers to seattle customers per hour?; Math.floor returns the largest integer less than or equal to the given number, which is decided in the following parantheses;
            // math.random spits out a random number; next set of parantheses is minCustomers (23) minus maxCustomers(65) plus one (to avoid getting a negative number?);
            //then multiplied by minCustomers(23)
            this.customersPH.push(cutsomers);
            //shows the amount of customers per hour in the log
        }
}
//header function (has store hours)


//create table element
let fishCookies = document.getElementById('fish-cookies');
//create table head container element
let tableHeaderContainer = document.createElement('thead');
//append this to fishCookies
//create table header element 
let tableHeaderEl = document.createElement('th');
//append this to thead
//create table row container
let tableRowContainer = document.getElementById('tbody'); //named tableRowContainer because it contains the row
//append this to fish cookies
//create table row element
let tableRow = document.createElement('tr');
//append to tbody

//put everything in a city(function)

//footer funtion (grand total hourly cookies)