import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tagTitle: {
    margin: theme.spacing.unit / 2
  }
});

class ChipArray extends Component {
  state = {
    chipData: [],
  };
  enableDelete = false;
  chipData = [];
  styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

  handleRequestDelete = data => () => {
    const chipData = [...this.props.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.props.chipData = chipData;    
    this.setState({ chipData });
  };

  render() {
    //this.setState({chipData: this.props.chipData});
    const classes = this.props.classes;
    if(this.props.enableDelete)   {
        return (
            <div className={classes.row}>
                <div className={classes.tagTitle}>標籤:</div><br/>
                {this.props.chipData.map(data => {
                return (
                    <Chip
                    label={data.label}
                    key={data.key}
                    onRequestDelete={this.handleRequestDelete(data)}
                    className={classes.chip}
                    />
                );
                })}
            </div>
        );
    } else  {
        return (
            <div className={classes.row}>
                <div className={classes.tagTitle}>標籤:</div><br/>
                {this.props.chipData.map(data => {
                return (
                    <Chip
                    label={data.label}
                    key={data.key}
                    className={classes.chip}
                    />
                );
                })}
            </div>
        );
    }
  }
}

ChipArray.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ChipArray);