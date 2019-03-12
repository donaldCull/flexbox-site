import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="col-1">Nav</nav>
        <div className="col-2">
          <header>Header</header>
          <main className="content">
            <article>Article</article>
          </main>
          <footer>Footer</footer>
        </div>

      </div>
    );
  }
}

export default App;
