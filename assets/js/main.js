// project grid
    const projects = [
    {
        title:"Movie Streaming website",
        description:"A responsive movie streaming website built with HTML & CSS. This project is designed to showcase my front-end development skills, including layout design, responsive UI, and modern styling practices.",
        demolink:"https://pamal29.github.io/Movie-Stream-Website/",
        githublink:"https://github.com/pamal29/Movie-Stream-Website",
        image:"assets/img/movie-stream.jpeg",
    },
    {
        title:"Snake Game",
        description:"Simple snake game built with Java.",
        demolink:"https://pamal29.github.io/snakeGame/",
        githublink:"https://github.com/pamal29/snakeGame",
        image:"assets/img/snake-game.png",
    },
    {
        title:"Movie Recommendation System",
        description:"A system that will recommend a movie based on the movie that you entered",
        demolink:"https://github.com/pamal29/Movie-Recommendations",
        githublink:"https://github.com/pamal29/Movie-Recommendations",
        image:"assets/img/movie recommendation.png",
    }
    ];

    const container1 = document.getElementById("projectsGrid");

    projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "transform transition duration-500 hover:scale-110 animate-fadeInUp";

    card.innerHTML = `
             <div class="transform transition duration-500 hover:scale-110 animate-fadeInUp flex flex-col h-full">
                    <div class="bg-gradient-to-br from-[#0d0d0d] to-[#212121] rounded-xl overflow-hidden h-full flex flex-col shadow-lg 
                                transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(33,33,33,0.3)] 
                                hover:from-[#0d0d0d] hover:to-[#2a2a2a]">


        
                        <!-- Image -->
                        <div class="h-48 bg-gradient-to-br from-lightblack to-morelight relative">
                            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                               <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                            </div>
                        </div>
        
                        <!-- Content -->
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-2xl font-bold mb-3 text-briyellow">${project.title}</h3>
                            <p class="text-gray-300 mb-4 leading-relaxed flex-grow">${project.description}</p>
        
        
                            <!-- Buttons -->
                            <div class="flex gap-3 mt-auto">
                                <button class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                                       onclick="window.open('${project.demolink}', '_blank')">
                                    Live Demo
                                </button>
                                <button id="gitbtn" class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                                        onclick="window.open('${project.githublink}', '_blank')">
                                    GitHub
                                </button>
                            </div>    
                        </div>
                    </div>
             </div>
    `;


    container1.appendChild(card);
});


const certificates = [
    {
        title:"Movie Streaming website",
        description:"A responsive movie streaming website built with HTML & CSS. This project is designed to showcase my front-end development skills, including layout design, responsive UI, and modern styling practices.",
        demolink:"https://pamal29.github.io/Movie-Stream-Website/",
        githublink:"https://github.com/pamal29/Movie-Stream-Website",
        image:"assets/img/movie-stream.jpeg",
    },

const container2 = document.getElementById("certificationGrid");

certificates.forEach(certificate => {
    const card = document.createElement("div");
    card.className = "transform transition duration-500 hover:scale-110 animate-fadeInUp";

    card.innerHTML = `
             <div class="transform transition duration-500 hover:scale-110 animate-fadeInUp flex flex-col h-full">
                    <div class="bg-gradient-to-br from-[#0d0d0d] to-[#212121] rounded-xl overflow-hidden h-full flex flex-col shadow-lg 
                                transition-all duration-700 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(33,33,33,0.3)] 
                                hover:from-[#0d0d0d] hover:to-[#2a2a2a]">


        
                        <!-- Image -->
                        <div class="h-48 bg-gradient-to-br from-lightblack to-morelight relative">
                            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                               <img src="${certificate.image}" alt="${certificate.title}" class="w-full h-full object-cover">
                            </div>
                        </div>
        
                        <!-- Content -->
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-2xl font-bold mb-3 text-briyellow">${certificate.title}</h3>
                            <p class="text-gray-300 mb-4 leading-relaxed flex-grow">${certificate.description}</p>
        
        
                            <!-- Buttons -->
                            <div class="flex gap-3 mt-auto">
                                <button class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                                       onclick="window.open('${certificate.demolink}', '_blank')">
                                    Live Demo
                                </button>
                                <button id="gitbtn" class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                                        onclick="window.open('${certificate.githublink}', '_blank')">
                                    GitHub
                                </button>
                            </div>    
                        </div>
                    </div>
             </div>
    `;


    container2.appendChild(card);
});




// mobile toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle menu on hamburger click
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
});

// Close menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });
});



