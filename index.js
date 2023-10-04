//initial list of freelancers
const freelancers = [
    {name:'Alice', occupation:'Writer', startingPrice:30},
    {name:'Bob', occupation:'Teatcher', startingPrice:50},
    {name:'Carol', occupation:'Programmer', startingPrice:70}
];

//list of names and occupations for new randomly generated freelancers
const names = ['Bill', 'Will', 'Bob'];
const occupations = ['Graphic Designer', 'Editor', 'Tester', 'Marketer']

const addFreelancer= () => {
    //randomly pick a name from index
    const nameIndex = Math.floor(Math.random() * names.length);
    //randomly pick and occupation from index
    const occupationIndex = Math.floor(Math.random() * occupations.length);
    //randomly set a starting price
    const randStartingPrice = ((Math.floor(Math.random() * 11)) * 10);
    //create an object and put everything together
    const newFreelancer = {
        name: names[nameIndex],
        occupation: occupations[occupationIndex],
        startingPrice: randStartingPrice
    }
    freelancers.push(newFreelancer);
    renderFreelancers();
}

//calculate the adverage and render it to the DOM
const getAdverage = () => {
    let average = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0)/ freelancers.length;
    const adverageElement = document.querySelector('#average');
    const averageText = document.createElement('p');
    averageText.innerText = `The average hourly rate is $${average}`
    adverageElement.replaceChildren(averageText);
}

//connect the list of randomly generated freelancers to the DOM
const renderFreelancers = () => {
    const freelancerDomElements = freelancers.map(freelancer => {
        const freelancerRow = document.createElement('li');
        freelancerRow.innerHTML = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.startingPrice}`
        return freelancerRow
    })
    const freelancerListElement = document.getElementById('freelancers');
    freelancerListElement.replaceChildren(...freelancerDomElements);

}
renderFreelancers();
getAdverage();
setInterval(addFreelancer, 5000);