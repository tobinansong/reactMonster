import {useState, useEffect} from "react";

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField])
 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)          
    };

    const onTitleChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString)          
      };

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
       <SearchBox 
        className ="title-search-box"
        onChangeHandler = {onTitleChange}
        placeholder ="set title"
       />
      <br />
      <SearchBox 
        className ="monsters-search-box"
        onChangeHandler = {onSearchChange}
        placeholder ="search Monster"
       />
   

      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component{
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//       };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(() => {
//       return {monsters: users};
//       })
//       );
//   }


//   render() {
//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//  
//   }

// }

export default App;
