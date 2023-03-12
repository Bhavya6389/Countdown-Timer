const endDate = "14 March 2023 11:03 AM";

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock()
{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now )/ 1000;
    console.log(end);
    console.log(now);
    console.log(diff);

    if(diff < 0) return;

    // Covert into days;
    inputs[0].value = Math.floor(diff/3600/24);

    // Convert into hours;
    inputs[1].value = Math.floor((diff/3600) % 24);

    // Convert into minutes
    inputs[2].value = (Math.floor(diff/60) % 60);

    // Convert into seconds
    inputs[3].value = (Math.floor(diff) % 60);
}

clock();

setInterval(
    () => {
        clock()
    },
    1000
)