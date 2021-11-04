function checkNum(value, name)
{
    if (value == "")
    {
        alert("Введите, пожалуйста, число в поле.")
        return false
    }
    else
    {
        if (value.substring(0,1)=="-")
        {
            alert(name + "не может быть отрицательной величиной, введите положительное число.")
            return false
        }
    }
    for (var i = 0; i < value.length; i++)
    {
        var ch = value.substring(i, i + 1)
        if ((ch < "0" || ch > "9") & ch!=".")
        {
            alert("Ведите в поле число.")
            return false
        }
    }
    return true
}

function compute()
{
    let m = document.getElementById("weight").value;
    let H = document.getElementById("Height").value;
    let h1 = document.getElementById("h").value;
    const g = 9.8;
    const K = 9.8;
    const d = 0.53;
    let bool = true;

    let m_sel = document.getElementById("m_sel").options[document.getElementById("m_sel").options.selectedIndex].value;

    let H_sel = document.getElementById("H_sel").options[document.getElementById("H_sel").options.selectedIndex].value;

    let h__sel = document.getElementById("h__sel").options[document.getElementById("h__sel").options.selectedIndex].value;

    let result_sel = document.getElementById("result_sel").options[document.getElementById("result_sel").options.selectedIndex].value;


    switch (m_sel) {
        case "lb":
            if ((m<88) || (m>440)) {
                alert("Масса должна быть в диапазоне от 88 до 440 фунтов.");
                bool = false;
            }
            m*=0.454;
            bool = true;
            break;
        case "kg":
            if ((m < 40) || (m > 200)) {
                alert("Масса должна быть в диапазоне от 40 до 200 кг.");
                bool = false;
            }
            bool = true;
            break;
        default:
            alert("Human body mass error!");
            bool = false;
            break;
    }

    switch (H_sel) {
        case "km":
            if ((H<0.0001) || (H>0.1)) {
                alert("Высота падения должна быть в диапазоне от 0,0001 до 0,1 км.");
                bool = false;
            }
            H*=1000;
            bool = true;
            break;
        case "ft":
            if ((H<0.3) || (H>329)) {
                alert("Высота падения должна быть в диапазоне от 0.3 до 329 футов.");
                bool = false;
            }
            H*=0.3048;
            bool = true;
            break;
        case "yd":
            if ((H<0.1) || (H>109)) {
                alert("Высота падения должна быть в диапазоне от 0.1 до 109 ярдов.");
                bool = false;
            }
            H*=0.9144;
            bool = true;
            break;
        case "m":
            if ((H<0.1) || (H>100)) {
                alert("Высота падения должна быть в диапазоне от 0,1 до 100 м.");
                bool = false;
            }
            bool = true;
            break;
        default:
            alert("Fall height error!");
            bool = false;
            break;

    }

    switch (h__sel) {
        case "sm":
            if ((h1<100) || (h1>250)) {
                alert("Рост человека должен быть в диапазоне от 100 до 250 см.");
                bool = false;
            }
            h1/=100;
            bool = true;
            break;
        case "ft":
            if ((h1<3.3) || (h1>8.2)) {
                alert("Рост человека должен быть в диапазоне от 3.3 до 8.2 футов.");
                bool = false;
            }
            h1*=0.3048;
            bool = true;
            break;
        case "in":
            if ((h1<39.4) || (h1>98.4)) {
                alert("Высота падения должна быть в диапазоне от 39.4 до 98.4 дюймов.");
                bool = false;
            }
            h1*=0.0254;
            bool = true;
            break;
        case "m":
            if ((h1<1) || (h1>2.5)) {
                alert("Рост человека должен быть в диапазоне от 1 до 2.5 м.");
                bool = false;
            }
            bool = true;
            break;
        default:
            alert("Human height error!");
            bool = false;
            break;
    }

    if (bool)
        switch (result_sel) {
            case "H":
                document.getElementById("result").innerHTML =  m * g * H / (h1 * d);
                break;
            case "kg":
                document.getElementById("result").innerHTML = m * g * H / (h1 * d * K);
                break;
        }
    else
        alert("Error in input data!");
}

