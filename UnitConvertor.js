function convertUnits() {
    const inputValue = parseFloat(document.getElementById('input1').value);
    const unit1 = document.getElementById('unit1').value;
    const unit2 = document.getElementById('unit2').value;

    let result;
    switch (unit1) {
        case 'meter':
            result = convertLength(inputValue, unit2);
            break;
        case 'kilometer':
            result = convertLength(inputValue * 1000, unit2);
            break;
        case 'centimeter':
            result = convertLength(inputValue / 100, unit2);
            break;

        case 'celsius':
            result = convertTemperature(inputValue, unit2);
            break;
        case 'fahrenheit':
            result = convertTemperature(inputValue, unit2);
            break;

        case 'kilogram':
            result = convertWeight(inputValue, unit2);
            break;
        case 'gram':
            result = convertWeight(inputValue * 1000, unit2);
            break;

        case 'second':
            result = convertTime(inputValue, unit2);
            break;
        case 'minute':
            result = convertTime(inputValue * 60, unit2);
            break;
        case 'hour':
            result = convertTime(inputValue * 3600, unit2);
            break;

        default:
            break;
    }

    document.getElementById('input2').value = result;
    document.getElementById('input2').style.backgroundColor='#90EE90';
}

function convertLength(value, toUnit) {
    switch (toUnit) {
        case 'meter':
            return value;
        case 'kilometer':
            return value / 1000;
        case 'centimeter':
            return value * 100;
        default:
            return 0;
    }
}

function convertTemperature(value, toUnit) {
    switch (toUnit) {
        case 'celsius':
            return value;
        case 'fahrenheit':
            return (value * 9 / 5) + 32;
        default:
            return 0;
    }
}

function convertWeight(value, toUnit) {
    switch (toUnit) {
        case 'kilogram':
            return value;
        case 'gram':
            return value * 1000;
        default:
            return 0;
    }
}

function convertTime(value, toUnit) {
    switch (toUnit) {
        case 'second':
            return value;
        case 'minute':
            return value / 60;
        case 'hour':
            return value / 3600;
        default:
            return 0;
    }
}
