import React from 'react';
import '../styles/BarGraph.css';

const BarGraph = ({ array, sortingAlgorithm }) => {
  const getAlgorithmInfo = (algorithm) => {
    switch (algorithm) {
      case 'bubbleSort':
      return (
        <div className="algorithm-info">
          <h2>Bubble Sort</h2>
          <p>
            Bubble Sort, sometimes referred to as sinking sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
          </p>
          <h5>Time Complexity:</h5>
          <p>
            - Worst case: O(n^2)
            <br />
            - Average case: O(n^2)
            <br />
            - Best case: O(n)
          </p>
          <h5>Space Complexity:</h5>
          <p>- O(1)</p>
        </div>
      );
    case 'quickSort':
      return (
        <div className="algorithm-info">
          <h2>Quick Sort</h2>
          <p>
            Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element, and partitioning other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
          </p>
          <h5>Time Complexity:</h5>
          <p>
            - Worst case: O(n^2)
            <br />
            - Average case: O(n log n)
            <br />
            - Best case: O(n log n)
          </p>
          <h5>Space Complexity:</h5>
          <p>- O(log n)</p>
        </div>
      );
    case 'mergeSort':
      return (
        <div className="algorithm-info">
          <h2>Merge Sort</h2>
          <p>
            Merge Sort is a divide-and-conquer algorithm that works by dividing the input array into two halves, calling itself for the two halves, and then merging the two sorted halves.
          </p>
          <h5>Time Complexity:</h5>
          <p>
            - Worst case: O(n log n)
            <br />
            - Average case: O(n log n)
            <br />
            - Best case: O(n log n)
          </p>
          <h5>Space Complexity:</h5>
          <p>- O(n)</p>
        </div>
      );
    case 'insertionSort':
      return (
        <div className="algorithm-info">
          <h2>Insertion Sort</h2>
          <p>
            Insertion Sort is a simple sorting algorithm that works by iterating through an array, removing one element at a time and finding the appropriate place to insert it into the sorted portion of the array.
          </p>
          <h5>Time Complexity:</h5>
          <p>
            - Worst case: O(n^2)
            <br />
            - Average case: O(n^2)
            <br />
            - Best case: O(n)
          </p>
          <h5>Space Complexity:</h5>
          <p>- O(1)</p>
        </div>
      );
      case 'selectionSort':
        return (
          <div className="algorithm-info">
            <h2>Selection Sort</h2>
            <p>
              Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part.
            </p>
            <h5>Time Complexity:</h5>
            <p>
              - Worst case: O(n^2)
              <br />
              - Average case: O(n^2)
              <br />
              - Best case: O(n^2)
            </p>
            <h5>Space Complexity:</h5>
            <p>- O(1)</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bar-graph">
      <div className="algorithm-info">
        {getAlgorithmInfo(sortingAlgorithm)}
      </div>
        {array.map((value, index) => (
      <div
        key={index}
        className="bar"
        style={{
          height: `${(value / Math.max(...array)) * 100}%`,
          width: `${100 / array.length}%`,
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            fontSize: `${60 / Math.sqrt(array.length)}px`,
            fontWeight: 'bold',
          }}
    >
      {value}
    </span>
  </div>
))}


    </div>
  );
};

export default BarGraph;
