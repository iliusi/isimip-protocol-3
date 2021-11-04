import React, { Component} from 'react'

const TableToggleLink = ({ closed, toggle }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }
  return (
    <a className="toggle-table" href="" onClick={onClick}>{closed ? 'Show table' : 'Hide table'}</a>
  )
}

const TableToggleButton = ({ closed, toggle }) => {
  return (
    <button className="toggle-table" onClick={toggle}>{closed ? 'Show table' : 'Hide table'}</button>
  )
}

const GroupToggleLink = ({ closed, toggle }) => {
  const onClick = event => {
    event.preventDefault()
    toggle()
  }
  return (
    <a className="toggle-group" href="" onClick={onClick}>{closed ? 'Show group' : 'Hide group'}</a>
  )
}

const filterRows = (config, rows, closed) => {
    const filteredRows = rows.filter(row => {
        if (row.simulation_rounds === undefined || row.simulation_rounds.includes(config.simulation_round)) {
            if (row.products === undefined || row.products.filter(product => config.products.includes(product)).length) {
                if (row.sectors === undefined || config.sectors.length == 0 || row.sectors.filter(sector => config.sectors.includes(sector)).length) {
                    return true
                }
            }
        }

        return false
    })

    // return only the first when closed
    return closed ? [filteredRows[0]] : filteredRows
}

const filterField = (config, field) => {
    if (Array.isArray(field)) {
        return field
    } else if (typeof field === 'object') {
        if (typeof field[config.simulation_round] !== 'undefined') {
            return field[config.simulation_round]
        }
    } else {
        return field
    }
}

export { TableToggleLink, TableToggleButton, GroupToggleLink, filterRows, filterField }
