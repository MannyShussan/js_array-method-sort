'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Função de comparação padrão (ordem lexicográfica)
    const defaultCompare = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      return aStr > bStr ? 1 : aStr < bStr ? -1 : 0;
    };

    const compare = compareFunction || defaultCompare;

    // Implementação do Merge Sort
    const mergeSort = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);

      return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
      const result = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (compare(left[i], right[j]) <= 0) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }

      // Adiciona os elementos restantes
      return result.concat(left.slice(i)).concat(right.slice(j));
    };

    // Ordena o array original usando Merge Sort
    const sortedArray = mergeSort([...this]);

    // Substitui os valores do array original pelos valores ordenados
    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
