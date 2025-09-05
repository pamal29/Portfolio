
    const projects = [
    {
        title:"Movie Streaming website",
        description:"A responsive movie streaming website built with HTML & CSS. This project is designed to showcase my front-end development skills, including layout design, responsive UI, and modern styling practices.",
        demolink:"https://pamal29.github.io/Movie-Stream-Website/",
        githublink:"https://github.com/pamal29/Movie-Stream-Website",
        emoji:"🎬"
    },
    {
        title:"GTA 6 Fan Made Website",
        description: "Website that I made because I am very hyped about this game.",
        demolink: "https://pamal29.github.io/GTA-6/",
        githublink:"https://github.com/pamal29/GTA-6",
        emoji:"🔥"
    },
    {
        title:"Snake Game",
        description:"Simple snake game built with Java.",
        demolink:"https://pamal29.github.io/snakeGame/",  // publish on GitHub Pages first!
        githublink:"https://github.com/pamal29/snakeGame",
        emoji:"🐍"
    }
    ];

    const container = document.getElementById("projectsGrid");

    projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "transform transition duration-500 hover:scale-110 animate-fadeInUp";

    card.innerHTML = `
        <div class="bg-gray-900 rounded-xl overflow-hidden h-full hover:bg-gray-800 transition-all duration-300 flex flex-col shadow-lg">
            <div class="h-28 bg-gradient-to-b from-purple-900 to-gray-800 relative">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div class="text-4xl">${project.emoji}</div>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-2xl font-bold mb-3 text-briyellow">${project.title}</h3>
                <p class="text-gray-300 mb-4 leading-relaxed flex-grow">${project.description}</p>
                <div class="flex gap-3 mt-auto">
                    <button class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                            onclick="window.open('${project.demolink}', '_blank')">
                        Live Demo
                    </button>
                    <button class="flex-1 text-modgrey px-4 py-2 rounded-lg transition-all duration-300 hover:bg-briyellow hover:text-black hover:scale-105 hover:shadow-lg"
                            onclick="window.open('${project.githublink}', '_blank')">
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    `;

    container.appendChild(card);
});

