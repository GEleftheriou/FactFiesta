document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    document.getElementById('score').textContent = 'Your score is: ' + score;

    // Correct the URL for the 'Retry Quiz' button
    document.getElementById('retry').addEventListener('click', function() {
        // Retrieve the last used topic from localStorage or session and redirect
        const lastTopic = localStorage.getItem('lastTopic');
        if (lastTopic) {
            window.location.href = 'quiz.html?topic=' + encodeURIComponent(lastTopic);
        } else {
            // Handle case where no last topic is found, redirect to home or show error
            console.error('No topic found for retrying the quiz');
            window.location.href = 'index.html';
        }
    });

    // 'Go Home' button redirects back to the home page, ensure correct file name
    document.getElementById('home').addEventListener('click', function() {
        window.location.href = 'index.html'; // Adjust as necessary
    });
});
