let musicData = [];
let correctScore = 0;
let totalAttempts = 0;
let currentTrack = null;
let autoTransitionTimer = null; // Timer reference

async function loadData() {
    const response = await fetch('data.json');
    musicData = await response.json();
    
    // Add audio ended listener
    document.getElementById('audio-player').addEventListener('ended', handleAudioEnded);
    
    updateScoreUI();
    nextQuestion();
}

function updateScoreUI() {
    document.getElementById('score').innerText = `امتیاز: ${correctScore} از ${totalAttempts}`;
}

function handleAudioEnded() {
    const buttons = document.querySelectorAll('#options-container button');
    // If buttons are not disabled, user hasn't answered
    if (!buttons[0].disabled) {
        showCorrectAnswer();
        autoTransitionTimer = setTimeout(nextQuestion, 5000);
    }
}

function showCorrectAnswer() {
    totalAttempts++;
    updateScoreUI();

    const feedback = document.getElementById('feedback');
    const fileName = currentTrack.file.split('/').pop().replace(/\.[^/.]+$/, "");
    
    // Disable buttons
    document.querySelectorAll('#options-container button').forEach(btn => btn.disabled = true);
    
    feedback.innerHTML = `<p style="color: #0077B6;">دستگاه: ${currentTrack.artist}<br>${fileName}</p>`;
    document.getElementById('next-btn').innerText = 'بعدی ▶';
    document.getElementById('next-btn').onclick = nextQuestion;
}

function nextQuestion() {
    // Clear timer if it's running
    if (autoTransitionTimer) {
        clearTimeout(autoTransitionTimer);
        autoTransitionTimer = null;
    }

    currentTrack = musicData[Math.floor(Math.random() * musicData.length)];
    const player = document.getElementById('audio-player');
    player.src = currentTrack.file;
    player.play();

    renderOptions();
    
    // Reset interaction UI
    const nextBtn = document.getElementById('next-btn');
    nextBtn.innerText = 'نمی‌دانم';
    nextBtn.onclick = showCorrectAnswer; // Reveal instead of skipping
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
    // Clear timer if user answers early
    if (autoTransitionTimer) {
        clearTimeout(autoTransitionTimer);
        autoTransitionTimer = null;
    }

    totalAttempts++;
    
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const fileName = currentTrack.file.split('/').pop().replace(/\.[^/.]+$/, "");
    
    // Disable buttons
    document.querySelectorAll('#options-container button').forEach(btn => btn.disabled = true);

    if (selected === currentTrack.artist) {
        correctScore++;
        feedback.innerHTML = `<p style="color: green;">درست! ${currentTrack.artist}<br>${fileName}</p>`;
    } else {
        feedback.innerHTML = `<p style="color: red;">نادرست. ${currentTrack.artist}<br>${fileName}</p>`;
    }
    
    updateScoreUI();
    nextBtn.innerText = 'بعدی ▶';
    nextBtn.onclick = nextQuestion;
}

loadData();
