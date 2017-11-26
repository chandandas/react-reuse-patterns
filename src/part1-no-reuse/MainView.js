import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table';
import {getRandomColorStyleValue} from '../utils'
import TagsInput from 'react-tagsinput'

export class MainView extends Component {
  static propTypes = {
    userData: PropTypes.array,
    tags: PropTypes.array.isRequired,
    updateTags: PropTypes.func.isRequired,
    color: PropTypes.string,
    columns: PropTypes.array
  }

  constructor(props) {
    super()

    this.state = {
      borderColor: props.color
    }
  }

  updateTags = newTags => {
    this.props.updateTags(newTags)
  }

  onMouseEnter = () => {
    this.setState({borderColor: getRandomColorStyleValue()})
  }

  onMouseLeave = () => {
    this.setState({borderColor: this.props.color})
  }

  render() {
    return (
      <div className="main-view">
        <div className="table-container">
          <div className="with-border"
               style={{borderColor: this.state.borderColor}}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
            <ReactTable
              data={this.props.userData}
              columns={this.props.columns}
              defaultPageSize={5}/>
          </div>
        </div>
        <div className="tags-container">
              <TagsInput value={this.props.tags} onChange={this.updateTags}/>
        </div>
      </div>
    )
  }
}
