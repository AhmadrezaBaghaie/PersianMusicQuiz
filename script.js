let musicData = [];
let score = 0;
let currentTrack = null;

async function loadData() {
    const response = await fetch('data.json');
    musicData = await response.json();
    document.getElementById('next-btn').innerText = 'نمی‌دانم';
    nextQuestion();
}

function nextQuestion() {
    currentTrack = musicData[Math.floor(Math.random() * musicData.length)];
    const player = document.getElementById('audio-player');
    player.src = currentTrack.file;
    player.play();

    renderOptions();
    
    // Reset interaction UI
    const nextBtn = document.getElementById('next-btn');
    nextBtn.innerText = 'نمی‌دانم';
    nextBtn.onclick = nextQuestion;
    document.getElementById('feedback').innerHTML = '';
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
    
    // Disable buttons
    document.querySelectorAll('#options-container button').forEach(btn => btn.disabled = true);

    if (selected === currentTrack.artist) {
        score++;
        document.getElementById('score').innerText = `امتیاز: ${score}`;
        feedback.innerHTML = `<p style="color: green;">درست! ${currentTrack.artist}<br>${fileName}</p>`;
    } else {
        feedback.innerHTML = `<p style="color: red;">نادرست. ${currentTrack.artist}<br>${fileName}</p>`;
    }
    
    nextBtn.innerText = 'بعدی ▶';
    nextBtn.onclick = nextQuestion;
}

loadData();
