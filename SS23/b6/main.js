const input = prompt("emter number");

const arr = input && input.split(",") || [];

const formattedDates = arr.map(dateStr => {
    const parts = dateStr.split("/");
    const day = parts[0].length === 1 ? "0" + parts[0] : parts[0];
    const month = parts[1].length === 1 ? "0" + parts[1] : parts[1];
    const year = parts[2];
    return day + "/" + month + "/" + year;
});

console.log(formattedDates);