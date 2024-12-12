function calculateAge() {
    const yearInput = document.getElementById("year");
    const monthInput = document.getElementById("month");
    const dayInput = document.getElementById("day");
    const errorMessage = document.getElementById("error");

    const year = parseInt(yearInput.value, 10);
    const month = parseInt(monthInput.value, 10) - 1;
    const day = parseInt(dayInput.value, 10);

    if (!year && !month && !day) {
        document.getElementById("error").textContent = "Please enter valid numeric values for day, month, and year.";
        return;
    }
    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || month < 0 || year <= 0) {
        document.getElementById("error").textContent = "Please enter valid numeric values for day, month, and year.";
        return;
    }

    errorMessage.textContent = "";
    document.getElementById("years").textContent = "";
    document.getElementById("months").textContent = "";
    document.getElementById("days").textContent = "";

    yearInput.classList.remove("invalid");
    monthInput.classList.remove("invalid");
    dayInput.classList.remove("invalid");


    const birthDay = new Date(year, month, day);
    const today = new Date();

    if (birthDay > today) {
           document.getElementById("error").textContent = "Birthday cannot be in the future!";
           return;
    }
    if (day > 31) {
        document.getElementById("error").textContent = "Invalid day!";
        return;
    }
    if (month > 12) {
        document.getElementById("error").textContent = "Invalid Month!";
           return;
    }
    if (year > 2099) {
        document.getElementById("error").textContent = "Invalid Year!";
           return;
    }

    console.log(today.getFullYear(), birthDay.getFullYear());
    console.log(today.getMonth(), birthDay.getMonth());
    console.log(today.getDate(), birthDay.getDate());


    let years = today.getFullYear() - birthDay.getFullYear();
    let months = today.getMonth() - birthDay.getMonth();
    let days = today.getDate() - birthDay.getDate();

    if (Number(months) < 0) {
        years--;
        months += 12;
    }

    if (Number(days) < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }



    document.getElementById("years").textContent = `${years}`;
    document.getElementById("months").textContent = `${months}`;
    document.getElementById("days").textContent = `${days}`;

}