

function displaynothing() {
    image_frame_Home.style.display = 'none';
    image_frame_51.style.display = 'none';
    image_frame_52.style.display = 'none';
    image_frame_53.style.display = 'none';
    image_frame_54.style.display = 'none';
    image_frame_31.style.display = 'none';
    image_frame_32.style.display = 'none';
    image_frame_33.style.display = 'none';
    image_frame_34.style.display = 'none';
    image_frame_35.style.display = 'none';
    image_frame_36.style.display = 'none';
    image_frame_21.style.display = 'none';
    image_frame_22.style.display = 'none';
    image_frame_23.style.display = 'none';
    image_frame_24.style.display = 'none';
    image_frame_11.style.display = 'none';
    image_frame_12.style.display = 'none';
    image_frame_13.style.display = 'none';
    image_frame_14.style.display = 'none';
    image_frame_15.style.display = 'none';
    displaynothingleft()
    notVisible()
}

function displaynothingleft() {
    frame5_photo.style.display = 'none';
    frame3_photo.style.display = 'none';
    frame2_photo.style.display = 'none';
    frame1_photo.style.display = 'none';
}



function SearchFunction()
{
    event.preventDefault();
    try {
        var inputElement = document.getElementById("search-id");
        var inputValue = inputElement.value;
        console.log(inputValue);
        if (inputValue > 5100 && inputValue < 5200) {
            displaynothing()
            image_frame_51.style.display = 'block'
            frame5_photo.style.display = 'block';
        } else if (inputValue > 5200 && inputValue < 5300) {
            displaynothing()
            image_frame_52.style.display = 'block'
            frame5_photo.style.display = 'block';
        }
        else if (inputValue > 5300 && inputValue < 5400) {
            displaynothing()
            image_frame_53.style.display = 'block'
            frame5_photo.style.display = 'block';
        }
        else if (inputValue > 5400 && inputValue < 5500) {
            displaynothing()
            image_frame_54.style.display = 'block'
            frame5_photo.style.display = 'block';
        }
        else if (inputValue > 3600 && inputValue < 3700) {
            displaynothing()
            image_frame_36.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 3500 && inputValue < 3600) {
            displaynothing()
            image_frame_35.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 3400 && inputValue < 3500) {
            displaynothing()
            image_frame_34.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 3300 && inputValue < 3400) {
            displaynothing()
            image_frame_33.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 3200 && inputValue < 3300) {
            displaynothing()
            image_frame_32.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 3100 && inputValue < 3200) {
            displaynothing()
            image_frame_31.style.display = 'block'
            frame3_photo.style.display = 'block';
        }
        else if (inputValue > 2400 && inputValue < 2500) {
            displaynothing()
            image_frame_24.style.display = 'block'
            frame2_photo.style.display = 'block';
        }
        else if (inputValue > 2300 && inputValue < 2400) {
            displaynothing()
            image_frame_23.style.display = 'block'
            frame2_photo.style.display = 'block';
        }
        else if (inputValue > 2200 && inputValue < 2300) {
            displaynothing()
            image_frame_22.style.display = 'block'
            frame2_photo.style.display = 'block';
        }
        else if (inputValue > 2100 && inputValue < 2200) {
            displaynothing()
            image_frame_21.style.display = 'block'
            frame2_photo.style.display = 'block';
        }
        else if (inputValue > 1500 && inputValue < 1600) {
            displaynothing()
            image_frame_15.style.display = 'block'
        }
        else if (inputValue > 1400 && inputValue < 1500) {
            displaynothing()
            image_frame_14.style.display = 'block'
            frame1_photo.style.display = 'block';
        }
        else if (inputValue > 1300 && inputValue < 1400) {
            displaynothing()
            image_frame_13.style.display = 'block'
            frame1_photo.style.display = 'block';
        }
        else if (inputValue > 1200 && inputValue < 1300) {
            displaynothing()
            image_frame_12.style.display = 'block'
            frame1_photo.style.display = 'block';
        }
        else if (inputValue > 1100 && inputValue < 1200) {
            displaynothing()
            image_frame_11.style.display = 'block'
            frame1_photo.style.display = 'block';
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
