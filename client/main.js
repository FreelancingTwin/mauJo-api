const video = document.getElementsByTagName('video');

Array.from(video).forEach(el => {
  el.type = "video/mp4",
  el.autoplay = "true",
  el.loop = "true",
  el.muted = "true",
  el.playsInline = "true",
  el.poster = "assets/logo.jpg"
})

Array.from(video).forEach(el => el.addEventListener('click', function() {
  if (el.paused) {
    el.play();
  } else {
    el.pause();
  }
}));


//jquery for the dateRange picker calendar
$(function() {
  $('input[name="datefilter"]').daterangepicker({
    timePicker: true,
    startDate: moment().startOf('hour'),
    endDate: moment().startOf('hour').add(72, 'hour'),
    locale: {
      format: 'M/DD hh:mm A'
    },
  });

// auto shows the calendar when page loads
  // $('input[name="datefilter"]').data('daterangepicker').show();
});


// Retrieve the canvas element
const ctx = document.getElementById('acquisitions').getContext('2d');

// Define the data for the bar graph
const data = {
    labels: ['9 am', '11 am', '1 pm', '3 pm', '5 pm', '7 pm', "9 pm", "11 pm", "1 am"],
    datasets: [{
        label: 'Busy Hours',
        data: [35, 40, 35, 35, 50, 60, 60, 50, 35],
        backgroundColor: 'rgba(242, 174, 44, 0.2)', // Set the background color for the bars
        borderColor: 'rgb(242, 174, 44)', // Set the border color for the bars
        borderWidth: 1, // Set the border width for the bars
        borderRadius: 100,
      borderSkipped: false,
    }]
};

// Create the bar graph
const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true // Start the y-axis at zero
            }
        }
    }
});



//RANDOMIZE GALLERY ELEMENTS
function shuffleArray(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const gallery = document.querySelector('.gallery');
const elements = Array.from(gallery.querySelectorAll('img, video'));
shuffleArray(elements);
gallery.innerHTML = '';
elements.forEach(el => {
  gallery.appendChild(el),
  el.style.height="fit-content",
  el.style.objectFit="contain",
  el.style.borderRadius="1rem"
})


const reviewsContainer = document.getElementById('googleReviews');
//MAPS INTEGRATION:
const fetchReviews = () => {
  
  //development env, uses localhost
  // fetch('http://localhost:8080/google-places?placeId=ChIJJeLfYmCzBTkRcSVrksWXIcQ&apiKey=AIzaSyDDobybAgArjzTZi_qe991167vHjm-vSMY')
  
  //PRODUCTION ENV, USES DOMAIN
  fetch('https://apitouibleshooting--maujo.netlify.app/google-places?placeId=ChIJJeLfYmCzBTkRcSVrksWXIcQ&apiKey=AIzaSyDDobybAgArjzTZi_qe991167vHjm-vSMY')
  .then(console.log('trying to fetch data.'))
  .then(response => response.json())
  .then(data => {
    console.log('checkpoint 1 of 2. i have the data', data)
    // Process the received data from the Google Places API
    let reviews = [];
    const freshReviews = data.result.reviews
    reviews.push(...freshReviews)

    console.log("reviews populated! checkpoint 2 of 2:", reviews)
    reviews && reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('reviewElement')
  const absoluteUrl = review.profile_photo_url;
  const imageSrc = `src=${absoluteUrl}`;
  const imgElement = `<img ${imageSrc} alt="Profile Photo">`;
  
      reviewElement.innerHTML = `
        ${imgElement}
        <p>${"⭐ ".repeat(Math.floor(review.rating))}</p>
        <br/>
        <p>${review.text}</p>
      `;
      reviewsContainer.appendChild(reviewElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

 fetchReviews();

 console.log('ya')