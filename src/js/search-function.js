
function SaveInput()
{
    image_frame_Home_right.style.display = 'none'
    image_frame_51.style.display = 'block'
    try {
        var inputElement = document.getElementById("search-id");
        var inputValue = inputElement.value;
        console.log(inputValue);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}
