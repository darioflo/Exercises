function rotarMatriz(matriz) {
  let matrizRotada = [];
  let arr1 = [];
  arr2 = [];
  arr3 = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (j === 0) {
        arr1.unshift(matriz[i][j]);
      }
      if (j === 1) {
        arr2.unshift(matriz[i][j]);
      }
      if (j === 2) {
        arr3.unshift(matriz[i][j]);
      }
    }
  }

  matrizRotada.push(arr1);
  matrizRotada.push(arr2);
  matrizRotada.push(arr3);

  return matrizRotada;
}

console.log(
  rotarMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function rotarMatrizGPT(matriz) {
  const n = matriz.length;

  // Transponer la matriz
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matriz[i][j], matriz[j][i]] = [matriz[j][i], matriz[i][j]];
    }
  }

  // Invertir cada fila
  for (let i = 0; i < n; i++) {
    matriz[i].reverse();
  }

  return matriz;
}

const diagonalesMatriz = (matriz) => {
  let sumaPrincipal = 0;
  let sumaSecundaria = 0;
  let n = matriz.length;

  for (let i = 0; i < n; i++) {
    sumaPrincipal += matriz[i][i];
    sumaSecundaria += matriz[i][n - 1 - i];
  }

  return { sumaPrincipal, sumaSecundaria };
};

console.log(
  diagonalesMatriz([
    [3, 2, 5],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
