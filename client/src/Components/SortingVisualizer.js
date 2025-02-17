import React, { useState } from 'react';
import BarGraph from './BarGraph';
import ControlPanel from './ControlPanel';
import { bubbleSort, quickSort, mergeSort, insertionSort, selectionSort, heapSort, radixSort } from '../utils/SortingAlgortihms';
import '../styles/SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sortingAlgorithm, setSortingAlgorithm] = useState('bubbleSort');
  const [sortingSpeed, setSortingSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);

  const handleSorting = async () => {
    setIsSorting(true);
    switch (sortingAlgorithm) {
      case 'bubbleSort':
    await bubbleSort(array, setArray, sortingSpeed, () => setIsSorting(false));
    break;
  case 'quickSort':
    await quickSort(array, 0, array.length - 1, setArray, sortingSpeed, () => setIsSorting(false));
    break;
  case 'mergeSort':
    await mergeSort(array, setArray, sortingSpeed, () => setIsSorting(false));
    break;
  case 'insertionSort':
    await insertionSort(array, setArray, sortingSpeed, () => setIsSorting(false));
    break;
  case 'selectionSort':
    await selectionSort(array, setArray, sortingSpeed, () => setIsSorting(false));
    break;
    case 'heapSort':
      await heapSort(array, setArray, sortingSpeed, () => setIsSorting(false));
      break;
    case 'radixSort':
      await radixSort(array, setArray, sortingSpeed, () => setIsSorting(false));
      break;
  default:
    break;
    }
  };

  const handleSpeedChange = (speed) => {
    setSortingSpeed(speed);
  };

  const handleAlgorithmChange = (algorithm) => {
    setSortingAlgorithm(algorithm);
  };

  return (
    <div className="sorting-visualizer">
    <BarGraph array={array} sortingAlgorithm={sortingAlgorithm} />
    <ControlPanel
      array={array}
      setArray={setArray}
      handleSorting={handleSorting}
      isSorting={isSorting}
      sortingAlgorithm={sortingAlgorithm}
      handleAlgorithmChange={handleAlgorithmChange}
      sortingSpeed={sortingSpeed}
      handleSpeedChange={handleSpeedChange}
    />
  </div>
  );
};

export default SortingVisualizer;
