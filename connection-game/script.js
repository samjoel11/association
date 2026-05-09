const levels = [
    {
        id: 'primary-key',
        title: 'Primary Key',
        images: [
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400', // Kids
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODRQZ-R30oCtaKMslkeznl0WWCNa60heo4Q&s'  // Key
        ],
        answer: 'Primary Key'
    },
    {
        id: 'data-mining',
        title: 'Data Mining',
        images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', // Chart
            'https://img.magnific.com/free-vector/man-helmet-working-mining-quarry_107791-2764.jpg?semt=ais_hybrid&w=740&q=80'  // Excavator
        ],
        answer: 'Data Mining'
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        images: [
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400', // Coffee
            'https://static.vecteezy.com/system/resources/thumbnails/051/590/339/small/movie-script-3d-illustration-png.png'  // Script
        ],
        answer: 'JavaScript'
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security',
        images: [
            'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400', // Bicycle
            'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400', // Man thumbs up
            'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=400'  // Shield
        ],
        answer: 'Cyber Security'
    },
    {
        id: 'webpage',
        title: 'Webpage',
        images: [
            'https://www.terminix.com/-/media/Images/spiders/close-up-of-spider-web.jpg?rev=b2197a4b5e3d4d3a921d246366045ea1', // Spider web
            'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400'  // Blank page
        ],
        answer: 'Webpage'
    },
    {
        id: 'compiler',
        title: 'Compiler',
        images: [
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400', // Code
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xVocvFcDnTrvTsNuiObmmJzu3WypF1nLiA&s'  // Gear
        ],
        answer: 'Compiler'
    },
    {
        id: 'binary-search-tree',
        title: 'Binary Search Tree',
        images: [
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400', // Binary code
            'data:image/png;base64,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', // Magnifying glass / search
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=400'  // Tree
        ],
        answer: 'Binary Search Tree'
    },
    {
        id: 'cloud-computing',
        title: 'Cloud Computing',
        images: [
            'https://eos.org/wp-content/uploads/2019/09/cumulus-clouds-blue-sky.jpg',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Cloud Computing'
    },
    {
        id: 'machine-learning',
        title: 'Machine Learning',
        images: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Machine Learning'
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmrp0fIpHc3OblwsMM4FyvrFlybjd0f-JRg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP9qFkoveywyEiQV7-RHKc29jAOR-zzGXyA&s'
        ],
        answer: 'Blockchain'
    },
    {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        images: [
            'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Artificial Intelligence'
    },
    {
        id: 'operating-system',
        title: 'Operating System',
        images: [
            'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Operating System'
    },
    {
        id: 'data-science',
        title: 'Data Science',
        images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Data Science'
    },
    {
        id: 'firewall',
        title: 'Firewall',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5koll5XAK58PyvUWFLW8dcGIVG4hZDnYPhQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooS5bve0o3bvoRJzmKCX2yiCh3lPeK1YIJg&s'
        ],
        answer: 'Firewall'
    },
    {
        id: 'big-data',
        title: 'Big Data',
        images: [
            'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Big Data'
    },
    {
        id: 'software-engineering',
        title: 'Software Engineering',
        images: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Software Engineering'
    },
    {
        id: 'database',
        title: 'Database',
        images: [
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ4Qi5tgp9xEhEU2c65lJrKa2cG0I5VvsHA&s'
        ],
        answer: 'Database'
    },
    {
        id: 'network',
        title: 'Network',
        images: [
            'https://images.unsplash.com/photo-1515524738708-327f6b0037a7?auto=format&fit=crop&q=80&w=400',
            'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400'
        ],
        answer: 'Network'
    },
    {
        id: 'open-source',
        title: 'Open Source',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN94cE_QNXqY8-bTcsF5tffGRgoKuuMcX9lA&s', // Open sign
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKa3R7UiW1N4F4YM-Gw1n_yXCxGg-DVXZYow&s'  // Sauce
        ],
        answer: 'Open Source'
    },
    {
        id: 'debugging',
        title: 'Debugging',
        images: [
            'https://media.istockphoto.com/id/1409661663/vector/computer-bug-icon-with-circuit.jpg?s=612x612&w=0&k=20&c=MOCdcUXHEI9jHV5qKWVZNGre97ofZRr5qGLugpcT6yQ=',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5Kuc9UIZ8PwLLrb_m_J8TjcIIHZh06dotQ&s'
        ],
        answer: 'Debugging'
    }
];

let currentLevelIndex = 0;

const domElements = {
    welcomeScreen: document.getElementById('welcome-screen'),
    thankYouScreen: document.getElementById('thank-you-screen'),
    appContainer: document.getElementById('app-container'),
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    imagesContainer: document.getElementById('images-container'),
    answerBtn: document.getElementById('answer-btn'),
    answerReveal: document.getElementById('answer-reveal'),
    revealedAnswer: document.getElementById('revealed-answer'),
    nextBtn: document.getElementById('next-btn'),
    interactionArea: document.querySelector('.interaction-area')
};

function initGame() {
    loadLevel(currentLevelIndex);
    setupEventListeners();
}

function loadLevel(index) {
    const level = levels[index];

    // Reset UI
    domElements.imagesContainer.innerHTML = '';

    // Inject dynamic images
    level.images.forEach((imgSrc, i) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-wrapper glass-panel';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `Clue ${i + 1}`;
        wrapper.appendChild(img);

        domElements.imagesContainer.appendChild(wrapper);

        // Add plus sign if not the last image
        if (i < level.images.length - 1) {
            const plus = document.createElement('div');
            plus.className = 'plus-sign';
            plus.textContent = '+';
            domElements.imagesContainer.appendChild(plus);
        }
    });

    domElements.interactionArea.classList.remove('hidden');
    domElements.answerReveal.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
}

function revealAnswer() {
    domElements.interactionArea.classList.add('hidden');
    domElements.revealedAnswer.textContent = levels[currentLevelIndex].answer;
    domElements.answerReveal.classList.remove('hidden');

    domElements.nextBtn.textContent = currentLevelIndex < levels.length - 1 ? 'Next Round' : 'Finish';
    domElements.nextBtn.classList.remove('hidden');
}

function setupEventListeners() {
    domElements.startBtn.addEventListener('click', () => {
        domElements.welcomeScreen.classList.add('hidden');
        domElements.appContainer.classList.remove('hidden');
    });

    domElements.answerBtn.addEventListener('click', () => {
        revealAnswer();
    });

    domElements.nextBtn.addEventListener('click', () => {
        if (currentLevelIndex < levels.length - 1) {
            currentLevelIndex++;
            loadLevel(currentLevelIndex);
        } else {
            domElements.appContainer.classList.add('hidden');
            domElements.thankYouScreen.classList.remove('hidden');
        }
    });

    domElements.restartBtn.addEventListener('click', () => {
        currentLevelIndex = 0;
        domElements.thankYouScreen.classList.add('hidden');
        domElements.welcomeScreen.classList.remove('hidden');
    });
}

document.addEventListener('DOMContentLoaded', initGame);
