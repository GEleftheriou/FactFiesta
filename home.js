document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('button');
    const topicSelect = document.getElementById('topicSelect');

    startButton.addEventListener('click', function() {
        const topic = topicSelect.value;
        if (topic) {
            // Redirect to the quiz page with the selected topic as a query parameter
            window.location.href = 'quiz.html?topic=' + encodeURIComponent(topic);
        } else {
            alert('Please select a topic to start the quiz.');
        }
    });
});
