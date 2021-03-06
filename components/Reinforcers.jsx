import React from 'react';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TextField from 'material-ui/TextField';

class Reinforcers extends React.Component{
  constructor(props){
    super(props);
    //this.favoriteToggle = this.favoriteToggle.bind(this);
  }
  // favoriteToggle(evt){
  //   var target = evt.target;
  //   console.log(target);
  // }
  render(){
    const style = {
      display: 'inline-block'
    }
    // const styles = {
    //   favoriteBorder: {
    //     display: 'visible'
    //   },
    //   favorite: {
    //     display: 'hidden'
    //   }
    // }
    // var reinforcers = this.props.reinforcerPropsArray.map(function(reinforcer, index){
    //   return(
    //
    //       <li key={index} className='reinforcer__list-item'>
    //         <span className='reinfocer__list-favorite'>
    //           <FavoriteBorder key={'favorite' + index} id={reinforcer} className='favorite-border' style={styles.favoriteBorder}/>
    //         </span>
    //         {reinforcer}
    //       </li>
    //
    //   );
    // });
    var reinfocerTest = this.props.reinforcerPropsArray.map(function(reinforcer, index){

      return(
        <Checkbox style={style} key={index} label={reinforcer}
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          onCheck={this.props.setReinforcers} />

      );
    }.bind(this));
    // var reinforcerRadioTest = this.props.reinforcerPropsArray.map(function(reinforcer, index){
    //   return(
    //     <RadioButtonGroup key={index} name='reinforcer'>
    //       <RadioButton key={index}
    //         value={reinforcer} label={reinforcer} checkedIcon={<ActionFavorite />}
    //         uncheckedIcon={<ActionFavoriteBorder />}
    //         onChange={this.props.setReinforcers} />
    //     </RadioButtonGroup>
    //   );
    // }.bind(this));
    return(
      <div>
        <h3>Reinforcers</h3>
        {reinfocerTest}
        <TextField
          hintText='Other reinforcers'
          floatingLabelText='Other reinforcers'
          name='otherReinforcers'
          id='other-reinforcers'
          style={style} />
      </div>
    );
  };
};

Reinforcers.defaultProps = {
  reinforcerPropsArray: ['iPad', 'Extra Snack', 'Slide', 'Wagon', 'Other']
};

module.exports = Reinforcers;

// <ul onClick={this.props.setReinforcers} className='reinfocer__list'>
//   {reinforcers}
// </ul>

// checkedIcon={<ActionFavorite key={'favorite' + index} />}
// uncheckedIcon={<ActionFavoriteBorder key={'favorite-border' + index} />}

// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   id='test'
//   label='iPad' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Slide' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Wagon' />
// <Checkbox
//   checkedIcon={<ActionFavorite />}
//   uncheckedIcon={<ActionFavoriteBorder />}
//   label='Other' />
