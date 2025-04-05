const form = document.getElementById('profileForm');
const cardContainer = document.getElementById('cardContainer');

// Validate the form on submit
form.addEventListener('submit', function (event) {
    // const form = event.target;
    // const phoneInput = document.getElementById('phone').value;
    const phone = document.getElementById('phone').value;


    // // Check if the phone number is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        event.preventDefault();
        alert('Please enter a valid 10-digit phone number.');
        return;
    }
    event.preventDefault();
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    // const phone = document.getElementById('phone').value;
    const job = document.getElementById('job').value;
    const company = document.getElementById('company').value;
    const about = document.getElementById('about').value;
    const cooking = document.getElementById('cooking').value;

    
    if (location && name && age && gender && phone && job && company && about && cooking) {
        displayUserCard1(location, name, age, gender, phone, job, company, about, cooking);
        form.style.display = 'none';

    }else if (location && name && age && gender && phone) {
        displayUserCard(location, name, age, gender, phone);
        // saveUserDataToAPI(name, age);
        form.style.display = 'none'; // Hide the form after submission
    }
});

function displayUserCard(location, name, age, gender, phone) {
    console.log('Displaying user card:',location, name, age, gender, phone); // Debugging log
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${name}</h3>
    <p>Location: ${location}</p>
    <p>Age: ${age}</p>
    <p>Gender: ${gender}</p>
    <p>Phone no: ${phone}</p>`;
    cardContainer.appendChild(card);
}

function displayUserCard1(location, name, age, gender, phone, job, company, about, cooking) {
    console.log('Displaying user card:',location, name, age, gender, phone, job, company, about, cooking); // Debugging log
    const card1 = document.createElement('div');
    card1.className = 'card';
    card1.innerHTML = `<h3>${name}</h3>
    <p>Location: ${location}</p>
    <p>Age: ${age}</p>
    <p>Gender: ${gender}</p>
    <p>Phone no: ${phone}</p>
    <p>Job: ${job}</p>
    <p>Company: ${company}</p>
    <p>About: ${about}</p>
    <p>Cooking: ${cooking}</p>`;
    cardContainer.appendChild(card1);
}