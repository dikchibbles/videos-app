import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }
    
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search for a video</label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </form>
        </div   >
    );
}

// class SearchBar extends React.Component {
//     state = { term: '' }

//     onFormSubmit = (e) => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.term)
//     }

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>
//                     <div className="field">
//                         <label>Search Video</label>
//                         <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})} />
//                     </div>
//                 </form>
//             </div>
//         )
//     } 
// }

export default SearchBar;


