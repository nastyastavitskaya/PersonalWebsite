class App extends React.Component {
  constructor(props){
    super();
  }


  render() {
    return (
      <header className="header">
        <Directory />
      </header>
      )
  }
}

ReactDOM.render(
  <App name={"Portfolio"}/>, document.getElementById('root')
)