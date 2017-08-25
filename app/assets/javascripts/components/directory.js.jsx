function SelectedOption(props) {
  var items = ['About', 'Resume', 'Social media', 'Blog', 'Contact'];
  return (
    <ul className='nav top-nav clearfix'>
      { items.map((opt) =>
        <li style={opt === props.selectedOption
          ? {color: 'rgba(0,0,0,0.3)'} : null}
          onClick={props.onSelect.bind(null, opt)}
          key={opt}>
          {opt}
        </li>
      ) }
    </ul>
  )
}

class Directory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedOption: 'About'
    };
    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(value){
    this.setState(function(){
      return { selectedOption: value }
    });
  }

  render() {
    /**/
    return (
      <div>
        <SelectedOption
        selectedOption={this.state.selectedOption}
        onSelect={this.updateSelection}/>
      </div>
    )
  }
}