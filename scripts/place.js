//Last Modification
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modification: ${lastModified}`;

//Weather
const temperature = 6.9;
const windSpeed = 10.44;

function calculateWindChill(temperature, windSpeed) {
    return (
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill.toFixed(1);
} else {
    document.getElementById('wind-chill').textContent = "N/A"
}