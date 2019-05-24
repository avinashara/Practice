window.onload = () => {
    let populateTitle = (date, flag, ele = document.getElementById('header-title')) => {
        let text = null;
        if (flag) {
            text = `${Months[date.getMonth()]}, ${date.getFullYear()}`;
        } else {
            text = `${Months[date.getMonth()]} ${Months[date.getDate()]}, ${date.getFullYear()}`;
        }
        ele.innerText = text;
    }
    let poppulateHeader = (daysShort, parent = document.getElementById('header')) => {
        let refs = document.createElement('div');
        refs.classList.add('header-days');
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        daysShort.forEach(element => {
            let ele = document.createElement('div');
            ele.classList.add("container-cell");
            ele.innerText = element;
            refs.appendChild(ele);
        });
        parent.appendChild(refs);
    }
    let populateCalendarContent = (date, parent = document.getElementById('content')) => {
        let startDateIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
            preMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
            nextMonthStartDat = 1,
            elems = document.createElement('div');
        elems.classList.add("content");
        for (let i = 0; i < 42; i++) {
            let ele = document.createElement('div');
            ele.classList.add('container-cell');
            if (i < startDateIndex) {
                ele.innerText = (preMonthLastDay - startDateIndex) + i + 1;
                ele.classList.add("last-month");
            } else if (i > lastDay + startDateIndex - 1) {
                ele.innerText = nextMonthStartDat;
                ele.classList.add("next-month");
                nextMonthStartDat++;
            } else {
                ele.classList.add("current-month");
                ele.innerText = (i - startDateIndex) + 1;
            }
            elems.appendChild(ele);
        }
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        parent.appendChild(elems);
    }
    function handleClick(event) {
        let type = event.target.value;
        if (type === "Previous") {
            today = new Date(today.getFullYear(), today.getMonth(), 0);
        } else if (type === "Next") {
            today = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        }
        init();
    }

    let today = new Date(),
        Months = ["January", "Feburary", "March", "April", "May", "june", "July", "August", "September", "October", "November", "December"],
        DaysFull = ["Sunday", "Monday", "Tuesdat", "Wednesday", "Thrusday", "Friday", "Saturday"],
        DaysShort = ["S", "M", "T", "W", "T", "F", "S"];

    let init = () => {

        populateTitle(today, true);
        poppulateHeader(DaysShort);
        populateCalendarContent(today);
    }
    init();
    document.getElementsByClassName("pre")[0].addEventListener('click', handleClick);
    document.getElementsByClassName("next")[0].addEventListener('click', handleClick);
}