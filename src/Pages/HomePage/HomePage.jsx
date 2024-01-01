import React from 'react'
import './HomePage.css'
import DropConstraintSec from '../../Sections/DropConstraintSec/DropConstraintSec'
import CountOfRows from '../../Sections/CountOfRows/CountOfRows'
import SelectStatement from '../../Sections/SelectStatement/SelectStatement'

export default function HomePage() {
    return (
        <div className='home-page'>
            <h1 className='home-page-title'>SQL Tools for Developers</h1>
            <div id="drop-constraint" className='sections'>
                <h2 className='drop-const-title'>Drop Constraint</h2>
                <DropConstraintSec />
            </div>
            <div id="row-count" className='sections'>
                <h2 className='section-2-title'>Count of Rows</h2>
                <CountOfRows />
            </div>
            <div id="select-statement" className='sections'>
                <h2 className='section-3-title'>Custom Statement</h2>
                <SelectStatement />
            </div>
            <div id="section-4" className='sections'>
                <h2 className='section-4-title'>Coming Soon...</h2>
            </div>
        </div>
    )
}
