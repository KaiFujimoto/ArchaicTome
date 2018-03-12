import React from 'react';

class AutoSuggestSearch extends React.Component {
      constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: [],
            dropdown: 'closed'
        };
        this.onChange.bind(this);
      }

      onChange(e) {
          this.setState({searchText: e.target.value});
      }

      getResults() {
          calltodb(searchText).then(e => {
              this.setState({searchResults: e.value});
          });
      }

      render() {
          return (
              <div>
                 <input
                   onChange={this.onChange}
                   >
                 </input>
              </div>
          );
      }

}
