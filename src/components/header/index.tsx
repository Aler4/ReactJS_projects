import {FC} from 'react';
import {TCurrency} from "../../types";
import './style.scss'
type TProp = {
    currencies: TCurrency[]
}
export const Header:FC<TProp> = ({currencies}) => {
    let headerItems = currencies.slice();
    headerItems.shift();
    return (
        <header className='header'>
            <div className="header_currenc-list">
                {headerItems.map((el) => (
                    <div key={el.r030} className='currenc-wrap'>
                        <h2 className='currency_title'>{el.txt}</h2>
                        <h2 className='currency_rate'>{el.rate}</h2>
                    </div>))
                }
            </div>

            <span>
                Данні актуальні на {currencies[1].exchangedate}
            </span>
        </header>
    )
}
