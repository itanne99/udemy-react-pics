import React from "react";

class SearchBar extends React.Component{
    state = {input: ''}

    render() {
        return (
            <div className={`ui segment`}>
                <form className={`ui form`}>
                    <div className={`field`}>
                        <label>Image Search</label>
                        <input type={"text"}
                               value={this.state.input}
                               onChange={(e) => this.setState({input: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;