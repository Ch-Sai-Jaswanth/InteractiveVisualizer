import React from 'react';
import '../styles/BarGraph.css';
import { FaPaperclip } from 'react-icons/fa';

const BarGraph = ({ array, sortingAlgorithm, sortOrder, comparingIndices }) => {
  const getAlgorithmInfo = (algorithm) => {
    switch (algorithm) {
      case 'bubbleSort':
        return (
          <div className="algorithm-info">
            <h2><a href='https://www.geeksforgeeks.org/bubble-sort-algorithm/' target='blank'>Bubble Sort <FaPaperclip size={12}/></a></h2>
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
            <h2><a href='https://www.geeksforgeeks.org/quick-sort-algorithm/' target='blank'>Quick Sort <FaPaperclip size={12}/></a></h2>
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
            <h2><a href='https://www.geeksforgeeks.org/merge-sort/' target='blank'>Merge Sort <FaPaperclip size={12}/></a></h2>
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
            <h2><a href='https://www.geeksforgeeks.org/insertion-sort-algorithm/' target='blank'>Insertion Sort <FaPaperclip size={12}/></a></h2>
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
            <h2><a href='https://www.geeksforgeeks.org/selection-sort-algorithm-2/' target='blank'>Selection Sort <FaPaperclip size={12}/></a></h2>
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
      case 'heapSort':
        return (
          <div className="algorithm-info">
            <h2><a href='https://www.geeksforgeeks.org/heap-sort/' target='blank'>Heap Sort <FaPaperclip size={12}/></a></h2>
            <p>
              Heap Sort is a comparison-based sorting algorithm that works by building binary heap from the input array, and then repeatedly extracting the maximum element from the heap and placing it at the end of the sorted array.
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
            <p>- O(1)</p>
          </div>
        );
      case 'radixSort':
        return (
          <div className="algorithm-info">
            <h2><a href='https://www.geeksforgeeks.org/radix-sort/' target='blank'>Radix Sort <FaPaperclip size={12}/></a></h2>
            <p>
              Radix Sort is a non-comparison-based that sorts the elements by processing the individual digits of each element. It works by first sorting the elements based on the least significant digit, and so on.
            </p>
            <h5>Time Complexity:</h5>
            <p>
              - Worst case: O(kn), k is number of digits in maximum element
              <br />
              - Average case: O(kn)
              <br />
              - Best case: O(kn)
            </p>
            <h5>Space Complexity:</h5>
            <p>- O(n + k)</p>
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
          className={`bar ${comparingIndices.includes(index) ? 'comparing' : ''}`}
          style={{
            height: `${(value / Math.max(...array)) * 100}%`,
            width: `${100 / array.length}%`,
            position: 'relative',
            transition: 'height 0.5s ease',
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
