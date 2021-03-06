import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as TransactionActions from '../actions/transactions'
import { PageHeader, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class NewTransaction extends Component {

  beginTransaction(event) {
    event.preventDefault()
    this.props.actions.addTransaction((id) => {
      this.context.router.push({pathname: `/transactions/${id}`})
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={::this.beginTransaction}>
          <Button bsStyle="primary" bsSize="large" block style={{marginTop: '20px'}} onClick={::this.beginTransaction}>Request Dragon</Button>
        </form>
      </div>
    )
  }
}

// ask for `router` from context
NewTransaction.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransaction)
