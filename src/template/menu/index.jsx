import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => (
        this.setState({hover: !this.state.hover})
    )
    
    render() {
        var linkStyle
        if (this.state.hover) {
            linkStyle = {
                'background-color': '#FEFDFF',
                'color':'#27233A'
            }
        } else {
            linkStyle = {
                'background-color': '#27233A',
                'color':'#FEFDFF'
            }
        }
        return (
            <div className='navbar-collapse order-3' id='navbarCollapse'>
                <form className='form-check-inline ms-0 ms-md-3'>
                    <div className='input-group input-group-sm'>
                        <input className='form-control rounded-pill' type='search' 
                            placeholder='Busque sua receita' aria-label='Pesquisar' />
                            <button class='btn btn-outline-secondary rounded-circle pd-search' type='submit'
                                style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                                <i class='fa fa-search'></i>
                            </button>
                    </div>
                </form>
                <ul className='navbar-nav'></ul>
            </div>
        )
    }
}

export default Menu
