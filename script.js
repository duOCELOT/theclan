document.addEventListener('DOMContentLoaded', function () {
    let clickedButton = null;

    // Add event listeners for each button
    document.getElementById('btn1').addEventListener('click', function() {
        clickedButton = 'btn1';
        changeContent('https://shard.dog/humansofbrazil', 'imgs/btn1_under.png', 'green');
        resetButtonStyles();
        document.getElementById('btn1').style.backgroundImage = "url('imgs/btn1_clicked.png')";
    });

    document.getElementById('btn2').addEventListener('click', function() {
        clickedButton = 'btn2';
        changeContent('URL_OF_YOUR_SECOND_PAGE', 'imgs/btn2_under.png', 'orange');
        resetButtonStyles();
        document.getElementById('btn2').style.backgroundImage = "url('imgs/btn2_clicked.png')";
    });

    document.getElementById('btn3').addEventListener('click', function() {
        clickedButton = 'btn3';
        changeContent('URL_OF_YOUR_THIRD_PAGE', 'imgs/btn3_under.png', 'yellow');
        resetButtonStyles();
        document.getElementById('btn3').style.backgroundImage = "url('imgs/btn3_clicked.png')";
    });

    // Add event listeners for mouseover and mouseout
    addMouseEvents('btn1', 'imgs/btn1.png', 'imgs/btn1_under.png');
    addMouseEvents('btn2', 'imgs/btn2.png', 'imgs/btn2_under.png');
    addMouseEvents('btn3', 'imgs/btn3.png', 'imgs/btn3_under.png');

    // Function to add mouseover and mouseout events for a button
    function addMouseEvents(buttonId, defaultImage, hoverImage) {
        const button = document.getElementById(buttonId);
        button.addEventListener('mouseover', function() {
            if (clickedButton !== buttonId) {
                button.style.backgroundImage = `url(${hoverImage})`;
            }
        });

        button.addEventListener('mouseout', function() {
            if (clickedButton !== buttonId) {
                button.style.backgroundImage = `url(${defaultImage})`;
            }
        });
    }

    // Function to change content based on the provided URL, button image, and background color
    function changeContent(url, btnImage, bgColor) {
        // Update the carousel items
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.textContent = ''; // Clear previous content
            item.style.backgroundColor = bgColor; // Set background color
        });

        // Add new content to the first carousel item
        carouselItems[0].textContent = url;

        // Update button background image
        document.getElementById(clickedButton).style.backgroundImage = `url(${btnImage})`;
    }

    // Function to reset button styles
    function resetButtonStyles() {
        document.getElementById('btn1').style.backgroundImage = "url('imgs/btn1.png')";
        document.getElementById('btn2').style.backgroundImage = "url('imgs/btn2.png')";
        document.getElementById('btn3').style.backgroundImage = "url('imgs/btn3.png')";
    }
});

function toggleSize(divId, direction) {
    var element = document.getElementById(divId);
    element.classList.toggle('expanded');
    
    // Optionally, you can add specific logic for left and right here
    if (direction === 'left') {
        // Additional logic for the left part
    } else if (direction === 'right') {
        // Additional logic for the right part
    }
}



var draggableImage = document.getElementById('draggableImage');
var draggableSvara = document.getElementById('draggableSvara');

var offsetXImage, offsetXSvara, initialLeftImage, initialLeftSvara;

// Add event listeners for both mouse and touch events
draggableImage.addEventListener('mousedown', startDragImage);
draggableSvara.addEventListener('mousedown', startDragSvara);

draggableImage.addEventListener('touchstart', startDragImage);
draggableSvara.addEventListener('touchstart', startDragSvara);

function startDragImage(e) {
    e.preventDefault();
    // Check if it's a touch event or a mouse event
    var clientX;
    if (e.type === 'touchstart') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }
    offsetXImage = clientX;
    initialLeftImage = draggableImage.offsetLeft;

    // Add event listeners based on the event type
    document.addEventListener('mousemove', dragImage);
    document.addEventListener('touchmove', dragImage);

    document.addEventListener('mouseup', stopDragImage);
    document.addEventListener('touchend', stopDragImage);
}

function startDragSvara(e) {
    e.preventDefault();
    // Check if it's a touch event or a mouse event
    var clientX;
    if (e.type === 'touchstart') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }
    offsetXSvara = clientX;
    initialLeftSvara = draggableSvara.offsetLeft;

    // Add event listeners based on the event type
    document.addEventListener('mousemove', dragSvara);
    document.addEventListener('touchmove', dragSvara);

    document.addEventListener('mouseup', stopDragSvara);
    document.addEventListener('touchend', stopDragSvara);
}

function dragImage(e) {
    // Check if it's a touch event or a mouse event
    var clientX;
    if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }

    var newLeft = clientX - offsetXImage + initialLeftImage;
    draggableImage.style.left = newLeft + 'px';
}

function dragSvara(e) {
    // Check if it's a touch event or a mouse event
    var clientX;
    if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }

    var newLeft = clientX - offsetXSvara + initialLeftSvara;
    draggableSvara.style.left = newLeft + 'px';
}

function stopDragImage() {
    document.removeEventListener('mousemove', dragImage);
    document.removeEventListener('touchmove', dragImage);

    document.removeEventListener('mouseup', stopDragImage);
    document.removeEventListener('touchend', stopDragImage);
}

function stopDragSvara() {
    document.removeEventListener('mousemove', dragSvara);
    document.removeEventListener('touchmove', dragSvara);

    document.removeEventListener('mouseup', stopDragSvara);
    document.removeEventListener('touchend', stopDragSvara);
}
