import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
function App() {
  enum loadState {
    NULL,
    LOADING,
    LOADED,
  }
  const [load,setLoad] = useState<loadState>(loadState.NULL)

  useEffect(() => {
    if(load == loadState.LOADING){
      console.log(window.api.getMain)
    }
  },[load]);

  return (
    <>
      <Button
       isLoading = {load == loadState.LOADING}
       onClick={()=> setLoad(loadState.LOADING)}
      >{
        window.api.getMain
      }
      </Button>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NAME</Th>
              <Th isNumeric>CGPA</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2045</Td>
              <Td>Himesh Ark</Td>
              <Td isNumeric>2.87</Td>
            </Tr>
            <Tr>
              <Td>2145</Td>
              <Td>Kirito Kuma</Td>
              <Td isNumeric>4.00</Td>
            </Tr>
            <Tr>
              <Td>1958</Td>
              <Td>Justin weasel</Td>
              <Td isNumeric>3.78</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>2079</Th>
              <Th>Tomas Eddison</Th>
              <Th isNumeric>3.48</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
