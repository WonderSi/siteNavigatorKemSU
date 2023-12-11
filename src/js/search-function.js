
function SaveInput()
{
    event.preventDefault();
    try {
        var inputElement = document.getElementById("search-id");
        var inputValue = inputElement.value;
        console.log(inputValue);
        if (inputValue < 5200 && inputValue > 5000) {
            image_frame_Home.style.display = 'none'
            image_frame_24.style.display = 'none'
            image_frame_51.style.display = 'block'
        } else if (inputValue == "5 корпус 1 этаж") {
            image_frame_Home.style.display = 'none'
            image_frame_24.style.display = 'none'
            image_frame_51.style.display = 'block'
        }
        else if (inputValue > 2400 && inputValue < 2500) {
            image_frame_Home.style.display = 'none'
            image_frame_51.style.display = 'none'
            image_frame_24.style.display = 'block'
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
