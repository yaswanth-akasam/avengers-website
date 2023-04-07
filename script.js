document.addEventListener("DOMContentLoaded", function() {
    fetch('avengers.json')
    .then(response => response.json())
    .then(data => {
      // const avengersList = document.getElementById('avengers-list');
      const cards = document.querySelectorAll(".card-div");
  
      cards.forEach((card,index) => {
          const avenger = data.avengers[index];
           
        
          // const cardDiv = document.querySelector('card-div');
          const cardImg = card.querySelectorAll(".card-img");
          cardImg[0].src = avenger.image_url;
          const cardTitle = card.querySelector(".card-title");
          cardTitle.textContent = avenger.name;
          const realName = card.querySelector(".real-name");
          realName.textContent = avenger.real_name;
          const occupation = card.querySelector(".card-occupation");
          occupation.textContent = avenger.occupation;
  
  
          
      //   cardDiv.classList.add('card');
      //   cardDiv.style.width = '18rem';
  
      //   const cardImg = document.createElement('img');
      //   cardImg.classList.add('card-img-top');
      //   cardImg.src = avenger.image_url;
      //   cardImg.alt = avenger.name;
      //   cardDiv.appendChild(cardImg);
  
      //   const cardBody = document.createElement('div');
      //   cardBody.classList.add('card-body');
      //   cardDiv.appendChild(cardBody);
  
      //   const cardTitle = document.createElement('h5');
      //   cardTitle.classList.add('card-title');
      //   cardTitle.textContent = avenger.name;
      //   cardBody.appendChild(cardTitle);
  
      //   const cardRealName = document.createElement('p');
      //   cardRealName.classList.add('card-text');
      //   cardRealName.textContent = `Real Name: ${avenger.real_name}`;
      //   cardBody.appendChild(cardRealName);
  
      //   const cardOccupation = document.createElement('p');
      //   cardOccupation.classList.add('card-text');
      //   cardOccupation.textContent = `Occupation: ${avenger.occupation}`;
      //   cardBody.appendChild(cardOccupation);
  
      //   const cardPowers = document.createElement('p');
      //   cardPowers.classList.add('card-text');
      //   cardPowers.textContent = 'Powers:';
      //   cardBody.appendChild(cardPowers);
  
      //   const powersList = document.createElement('ul');
      //   avenger.powers.forEach(power => {
      //     const powerItem = document.createElement('li');
      //     powerItem.textContent = power;
      //     powersList.appendChild(powerItem);
      //   });
      //   cardPowers.appendChild(powersList);
  
      //   const cardMovies = document.createElement('p');
      //   cardMovies.classList.add('card-text');
      //   cardMovies.textContent = 'Movies:';
      //   cardBody.appendChild(cardMovies);
  
      //   const moviesList = document.createElement('ul');
      //   avenger.movies.forEach(movie => {
      //     const movieItem = document.createElement('li');
      //     movieItem.textContent = movie;
      //     moviesList.appendChild(movieItem);
      //   });
      //   cardMovies.appendChild(moviesList);
  
        // avengersList.appendChild(cardDiv);
      });
    });
  
  })