import axios from 'axios';
import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

const App = () => {
  const [selected, setSelected] = React.useState("");
  const [data,setData] = React.useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get Values from the database
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        // Store Values in Temporary Array
        const newArray = response.data.map((item:any) => {
          return { key: item.id, value: item.name };
        });

        // Set Data Variable
        setData(newArray);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return(
    <SafeAreaView>
      <SelectList 
        setSelected={(val:any) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder='ART'
    />
    </SafeAreaView>
  )

};

export default App;