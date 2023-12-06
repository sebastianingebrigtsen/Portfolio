document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.getElementById('profilePicture');
    const header = document.querySelector('h1.display-2'); // h1 element
    const elementsToChange = [
        ...document.querySelectorAll('.btn'), // All buttons
        document.querySelector('.about-me-section'),
        document.querySelector('.footer-background-overlap'),
        document.querySelector('footer')
    ];

    function toggleNeonBackground(add) {
        elementsToChange.forEach(el => {
            if (el) {
                el.classList.toggle('neonpunk-background', add);
            }
        });
    }

    profilePic.addEventListener('mouseover', function () {
        this.src = 'images/avatarHappy.png'; // Alternate image
        header.classList.add('neonpunk');
        toggleNeonBackground(true);
    });

    profilePic.addEventListener('mouseout', function () {
        this.src = 'images/avatarDefault.png'; // Original image
        header.classList.remove('neonpunk');
        toggleNeonBackground(false);
    });
});









// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all h1 elements with the class 'numberCounter'
    var counters = document.querySelectorAll('.numberCounter');

    // Iterate through each counter element
    counters.forEach(function(counter) {
        // Retrieve the target number and custom text from the element's data attribute
        var targetNumber = parseInt(counter.dataset.targetNumber, 10);
        var customText = counter.dataset.customText || "";
        var currentNumber = 0;
        var duration = 4000; // Duration in milliseconds
        var startTime = Date.now();

        // Function to animate the number with an ease-out effect
        function animate() {
            var elapsedTime = Date.now() - startTime;
            var progress = elapsedTime / duration;

            // Apply an ease-out effect
            progress = progress < 1 ? Math.pow(progress - 1, 3) + 1 : 1;

            // Calculate the current number to be displayed
            currentNumber = targetNumber * progress;

            // Update the text of the counter element, including custom text
            counter.innerText = Math.floor(currentNumber) + customText;

            // Continue the animation if the progress is less than 100%
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // When animation ends, ensure the final number is displayed with custom text
                counter.innerText = targetNumber + customText;
            }
        }

        // Start the animation
        requestAnimationFrame(animate);
    });
});



function myFunction() {
    // start the timer
    console.time("myFunction");

    // do some heavy computation
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }

    // simulate network latency
    let latency = Math.floor(Math.random() * 1000);
    let startLatency = performance.now();
    while (performance.now() - startLatency < latency) {}

    // stop the timer and log the elapsed time
    console.timeEnd("myFunction");

    // return the result
    return sum;
}