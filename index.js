// Reto 1: Sumar propiedades

const sum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].edad;
    }
    return sum;
}

// Reto 2: Filtrar productos

const filterProducts = (arr) => {
    let filtered = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].precio > 50) filtered.push(arr[i]);
    }
    return filtered;
}


// Reto 3: Encontrar estudiantes por nombre

const findStudents = (arr, name) => {
    let student = null;
    for(let i = 0; i < arr.length; i++) {
        student = arr[i].nombre === name ? arr[i] : null;
    }
    return student;
}

// Reto 4: Ordenar productos

const sortProducts = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i].precio > arr[j].precio) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// Reto 5: Juntar arreglos

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

// O esta la otra forma mezclandolos

const mergeArrays2 = (arr1, arr2) => {
    let merged = [];
    let index = 0;
    while(index < arr1.length || index < arr2.length) {
        if(index < arr1.length) merged.push(arr1[index]);
        if(index < arr2.length) merged.push(arr2[index]);
        index++;
    }
    return merged;
}