const solution = (n) => {
    const n_string = n.toString();
    const arr = n_string.split("");
    const int_arr = arr.map(item => parseInt(item))
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return int_arr.reduce(reducer);
}


