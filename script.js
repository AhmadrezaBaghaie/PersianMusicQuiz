let musicData = [];
let score = 0;
let currentTrack = null;

async function loadData() {
    const response = await fetch('data.json');
    musicData = await response.json();
    nextQuestion();
}

function nextQuestion() {
    currentTrack = musicData[Math.floor(Math.random() * musicData.length)];
    const player = document.getElementById('audio-player');
    player.src = currentTrack.file;
    player.play();

    renderOptions();
}

function renderOptions() {
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const artists = [...new Set(musicData.map(item => item.artist))];
    const choices = [currentTrack.artist];
    
    while(choices.length < 4) {
        let randomArtist = artists[Math.floor(Math.random() * artists.length)];
        if(!choices.includes(randomArtist)) choices.push(randomArtist);
    }
    
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(artist => {
        const btn = document.createElement('button');
        btn.innerText = artist;
        btn.onclick = () => checkAnswer(artist);
        container.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const fileName = currentTrack.file.split('/').pop().replace(/\.[^/.]+$/, "");
    
    // Disable other buttons
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach(btn => btn.disabled = true);

    if (selected === currentTrack.artist) {
        score++;
        document.getElementById('score').innerText = `امتیاز: ${score}`;
        feedback.innerHTML = `<p style="color: green;">درست! دستگاه/آواز: ${currentTrack.artist}.<br>${fileName}</p>`;
    } else {
        feedback.innerHTML = `<p style="color: red;">نادرست. دستگاه/آواز: ${currentTrack.artist}.<br>${fileName}</p>`;
    }
    
    nextBtn.style.display = 'block';
    nextBtn.onclick = () => {
        nextBtn.style.display = 'none';
        feedback.innerHTML = '';
        nextQuestion();
    };
}

loadData();
