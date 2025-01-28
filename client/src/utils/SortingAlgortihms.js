export const bubbleSort = async (array, setArray, sortingSpeed, onComplete) => {
    const newArray = [...array];
    let swapped;
    for (let i = 0; i < newArray.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < newArray.length - i - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
          swapped = true;
          setArray([...newArray]);
          await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
        }
      }
      if (!swapped) break;
    }
    onComplete();
  };
  
  export const quickSort = async (array, left, right, setArray, sortingSpeed, onComplete) => {
    if (left < right) {
      const pivotIndex = await partition(array, left, right, setArray, sortingSpeed);
      await quickSort(array, left, pivotIndex - 1, setArray, sortingSpeed, () => {});
      await quickSort(array, pivotIndex, right, setArray, sortingSpeed, () => {});
      if (left === 0 && right === array.length - 1) {
        onComplete();
      }
    }
  };
  
  
  const partition = async (array, left, right, setArray, sortingSpeed) => {
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
        i++;
        j--;
      }
    }
  
    return i;
  };
  
  
  export const mergeSort = async (array, setArray, sortingSpeed, onComplete) => {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    const sortedLeft = await mergeSort(left, setArray, sortingSpeed, () => {});
    const sortedRight = await mergeSort(right, setArray, sortingSpeed, () => {});
  
    const sortedArray = await merge(sortedLeft, sortedRight, setArray, sortingSpeed);
    setArray(sortedArray);
    onComplete();
    return sortedArray;
  };
  
  const merge = async (left, right, setArray, sortingSpeed) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    setArray([...result]);
    await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
    return result;
  };  
  
  export const insertionSort = async (array, setArray, sortingSpeed, onComplete) => {
    const newArray = [...array];
    for (let i = 1; i < newArray.length; i++) {
      let key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j--;
        setArray([...newArray]);
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
      }
      newArray[j + 1] = key;
    }
    onComplete();
  };

  export const selectionSort = async (array, setArray, sortingSpeed, onComplete) => {
  const newArray = [...array];
  for (let i = 0; i < newArray.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[minIndex]) {
        minIndex = j;
      }
    }
    [newArray[i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];
    setArray([...newArray]);
    await new Promise((resolve) => setTimeout(resolve, sortingSpeed));
  }
  onComplete();
};
