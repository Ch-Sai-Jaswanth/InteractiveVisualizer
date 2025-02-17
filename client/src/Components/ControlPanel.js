import React, { useState, useEffect } from 'react';
import '../styles/ControlPanel.css';

const ControlPanel = ({
  array,
  setArray,
  handleSorting,
  isSorting,
  sortingAlgorithm,
  handleAlgorithmChange,
  sortingSpeed,
  handleSpeedChange,
  username,
}) => {
  const [arrayInput, setArrayInput] = useState('');
  const [arraySize, setArraySize] = useState(array.length);
  const [userArrays, setUserArrays] = useState([]);
  const [selectedArrayIndex, setSelectedArrayIndex] = useState(-1);
  const [selectedAlgorithm1, setSelectedAlgorithm1] = useState('bubbleSort');
  const [selectedAlgorithm2, setSelectedAlgorithm2] = useState('quickSort');
  const [comparisonResult, setComparisonResult] = useState('');

  useEffect(() => {
    const storedArrays = localStorage.getItem(`${username}_arrays`);
    if (storedArrays) {
      setUserArrays(JSON.parse(storedArrays));
    }
  }, [username]);

  const handleArrayInput = (input) => {
    setArrayInput(input);
  };

  const handleArraySizeChange = (size) => {
    setArraySize(size);
  };

  const handleSubmit = () => {
    const inputArray = arrayInput.split(',').map(Number);
    setArray(inputArray);
    setArraySize(inputArray.length);

    setUserArrays([...userArrays, inputArray]);
    localStorage.setItem(`${username}_arrays`, JSON.stringify([...userArrays, inputArray]));
  };

  const handleArraySelect = (index) => {
    setSelectedArrayIndex(index);
    setArrayInput(userArrays[index].join(','));
    setArray(userArrays[index]);
    setArraySize(userArrays[index].length);
  };

  const handleArrayDelete = (index) => {
    const updatedArrays = [...userArrays];
    updatedArrays.splice(index, 1);
    setUserArrays(updatedArrays);
    localStorage.setItem(`${username}_arrays`, JSON.stringify(updatedArrays));
    if (index === selectedArrayIndex) {
      setSelectedArrayIndex(-1);
    }
  };

  const compareAlgorithms = (algorithm1, algorithm2) => {
    const array1 = [...array];
    const array2 = [...array];
  
    const startTime1 = performance.now();
    handleSorting(array1, algorithm1);
    const endTime1 = performance.now();
  
    const startTime2 = performance.now();
    handleSorting(array2, algorithm2);
    const endTime2 = performance.now();
  
    const time1 = endTime1 - startTime1;
    const time2 = endTime2 - startTime2;
    let result;
    if (time1 < time2) {
      result = `${algorithm1} is faster than ${algorithm2} for the given array`;
    } else if (time1 > time2) {
      result = `${algorithm2} is faster than ${algorithm1} for the given array`;
    } else {
      result = `${algorithm1} and ${algorithm2} have the same performance`;
    }
  
    setComparisonResult(result);
  };

  return (
    <div className="control-panel">
      <div className="input-group">
        <label htmlFor="array-input">Array Elements:</label>
        <input
          type="text"
          id="array-input"
          value={arrayInput}
          placeholder='Enter comma separated values'
          onChange={(e) => handleArrayInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="input-group">
        <label htmlFor="array-size">Array Size:</label>
        <input
          type="number"
          id="array-size"
          min="2"
          max="100"
          value={arraySize}
          onChange={(e) => handleArraySizeChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="previous-arrays">Previous Arrays:</label>
        <select
          id="previous-arrays"
          value={selectedArrayIndex}
          onChange={(e) => handleArraySelect(parseInt(e.target.value))}
        >
          <option value="0">Select a previous array</option>
          {userArrays.map((arr, index) => (
            <option key={index} value={index}>
              [{arr.join(', ')}]
            </option>
          ))}
        </select>
        {selectedArrayIndex !== -1 && (
          <button
            className="btn btn-danger"
            onClick={() => handleArrayDelete(selectedArrayIndex)}
          >🗑️</button>
        )}
      </div>
      <div className="input-group">
        <label htmlFor="sorting-algorithm">Sorting Algorithm:</label>
        <select
          id="sorting-algorithm"
          value={sortingAlgorithm}
          onChange={(e) => handleAlgorithmChange(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="heapSort">Heap Sort</option>
          <option value="radixSort">Radix Sort</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="sorting-speed">Sorting Speed:</label>
        <input
          type="range"
          id="sorting-speed"
          min="100"
          max="1000"
          step="100"
          value={sortingSpeed}
          onChange={(e) => handleSpeedChange(e.target.value)}
        />
        <span>{sortingSpeed} ms</span>
      </div>
      <div className="input-group">
        <button onClick={handleSorting} disabled={isSorting}>
          {isSorting ? 'Sorting...' : 'Start Sorting'}
        </button>
      </div>
      <div className="input-group">
        <label htmlFor="sorting-algorithm-1">Sorting Algorithm 1:</label>
        <select
          id="sorting-algorithm-1"
          value={selectedAlgorithm1}
          onChange={(e) => setSelectedAlgorithm1(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="heapSort">Heap Sort</option>
          <option value="radixSort">Radix Sort</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="sorting-algorithm-2">Sorting Algorithm 2:</label>
        <select
          id="sorting-algorithm-2"
          value={selectedAlgorithm2}
          onChange={(e) => setSelectedAlgorithm2(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="heapSort">Heap Sort</option>
          <option value="radixSort">Radix Sort</option>
        </select>
      </div>
      <div className="input-group">
        <button className="compare-button" onClick={() => compareAlgorithms(selectedAlgorithm1, selectedAlgorithm2)}>
          Compare Algorithms
        </button>
      </div>

      {comparisonResult && (
        <div className="comparison-result">
          <h3>Performance Comparison:</h3>
          <p>{comparisonResult}</p>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
