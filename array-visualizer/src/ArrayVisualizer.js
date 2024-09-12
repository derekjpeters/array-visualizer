import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { FaPlus, FaFilter, FaSearch } from 'react-icons/fa';

function ArrayVisualizer() {

  const [array1, setArray1] = useState('');
  const [array2, setArray2] = useState('');
  const [mergedArray, setMergedArray] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(-1);

  // Function to convert a comma-separated string to an array of numbers
  const parseArray = (str) => {
    console.log("Parsing array from string", str);
    return str.split(',').map(num => parseInt(num.trim(), 10));
  };

  // Function to merge two sorted arrays
  const mergeSortedArrays = () => {
    let arr1 = parseArray(array1);
    let arr2 = parseArray(array2);
    console.log("Array 1:", arr1);
    console.log("Array 2:", arr2);
    let merged = [], i = 0, j = 0; 

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++]);
      } else {
        merged.push(arr2[j++]);
      }
    }

    // Concatenate remaining elements
    setMergedArray(merged.concat(arr1.slice(i)).concat(arr2.slice(j)));
    console.log("Merged Array:", merged.concat(arr1.slice(i)).concat(arr2.slice(j)));
  };

  // Function to filter array based on filter value
  const handleFilterArray = () => {
    let arr = parseArray(array1);
    console.log("Filtering Array:", arr);
    setFilteredArray(arr.filter(num => num >= filterValue));
    console.log("Filtered Array:", arr.filter(num => num >= filterValue));
  };

  // Function to search in the array
  const searchArray = () => {
    let arr = parseArray(array1);
    console.log("Searching in the Array:", arr);
    let index = arr.indexOf(parseInt(searchValue, 10));
    setSearchResult(index);
    console.log("Search Result:", index === -1 ? "Element not found" : `Element found at index ${index}`);
  };

  return (
    <Container className="array-visualizer">
      <Row>
        <Col>
          <h3>Array 1</h3>
          <Form.Control
            type="text"
            placeholder="Enter comma-separated numbers"
            value={array1}
            onChange={(e) => setArray1(e.target.value)}
          />
        </Col>

        <Col>
          <h3>Array 2</h3>
          <Form.Control
            type="text"
            placeholder="Enter comma-separated numbers"
            value={array2}
            onChange={(e) => setArray2(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <Button variant="primary" onClick={mergeSortedArrays}>
            Merge Arrays <FaPlus />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Merged Array:</h4>
          <div>{mergedArray.join(', ')}</div>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <h4>Filter Array (Array 1)</h4>
          <Form.Control
            type="number"
            placeholder="Enter a number to filter"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="warning" onClick={handleFilterArray}>
            Filter Array <FaFilter />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Filtered Array:</h4>
          <div>{filteredArray.join(', ')}</div>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <h4>Search Array (Array 1)</h4>
          <Form.Control
            type="number"
            placeholder="Enter a number to search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="info" onClick={searchArray}>
            Search Array <FaSearch />
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4>Search Result:</h4>
          <div>
            {searchResult === -1
              ? 'Element not found'
              : `Element found at index ${searchResult}`}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ArrayVisualizer;


