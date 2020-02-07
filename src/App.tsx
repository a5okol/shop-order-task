import * as React from 'react';

import './App.css';
// import './img/font/Stylesheet.css'


import Bitmap from './img/Bitmap.svg'
import Bitmap2 from './img/Bitmap2.svg'
import Bitmap3 from './img/Bitmap3.svg'
import combinedShape from './img/combinedShape.svg'
import NavbgCopy from './img/NavbgCopy.svg';
import Shape from './img/Shape.svg';
import shippingInfo from './img/shippingInfo.svg';

import Input from './Input';

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <div className={'headerBlock'}>
                    <div className="Navigation">
                        <a href="/" className="NavLink">
                            <img src={combinedShape} className="AppLogo" alt="logo"/>
                            <img src={shippingInfo} className="AppLogo2" alt="logo"/>
                        </a>
                    </div>
                    <div className="rightHead">
                        <a href="#">
                            <p className="cart">cart</p>
                            <img src={Shape} className="AppLogo3" alt="orders"/>
                            <p className="orderNumber">3</p>
                        </a>
                    </div>
                    <img src={NavbgCopy} alt="line" className="headerLine"/>
                </div>

                <div className="bodyBlock">
                    <div className="windowBlock">
                        <div className="leftPart">
                            <Input/>
                        </div>
                        <div className={"rightPart"}>
                            <h3 className="h3Title">Order Summary</h3>
                            <span className="EditOrder">edit order</span>
                            <div className="orders">
                                <div className="cartOrder">
                                    <table>
                                        <tr>
                                            <td className="Table1">
                                                <div className="imgOrder">
                                                    <img src={Bitmap} alt="Bitmap"/>
                                                </div>
                                            </td>
                                            <td className="Table2">
                                                <h4 className="productTitle">The Chelsea Boot</h4>
                                                <p className="productColor">Black</p>
                                                <p className="productQuantity">
                                                    <span>Quantity:</span> 1
                                                </p>
                                            </td>
                                            <td className="Table1">
                                                <span className="productPrice">$235</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <hr/>

                                <div className="cartOrder">
                                    <table>
                                        <tr>
                                            <td className="Table1">
                                                <div className="imgOrder">
                                                    <img src={Bitmap2} alt="Bitmap2"/>
                                                </div>
                                            </td>
                                            <td className="Table2">
                                                <h4 className="productTitle">The Twill Snap Backpack</h4>
                                                <p className="productColor">Reverse Denim + Brown leather</p>
                                                <p className="productQuantity"><span>Quantity:</span> 1</p>
                                            </td>
                                            <td className="Table1">
                                                <span className="productPrice">$65</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <hr/>

                                <div className="cartOrder">
                                    <table>
                                        <tr>
                                            <td className="Table1">
                                                <div className="imgOrder">
                                                    <img src={Bitmap3} alt="Bitmap3"/>
                                                </div>
                                            </td>
                                            <td className="Table2">
                                                <h4 className="productTitle">The Twill Zip Tote</h4>
                                                <p className="productColor">Reverse Denim + Black leather</p>
                                                <p className="productQuantity"><span>Quantity:</span> 1</p>
                                            </td>
                                            <td className="Table1">
                                                <span className="productPrice">$48</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <hr/>
                                <table className="allTable">
                                    <div className="allPrise">
                                        <tr>
                                            <td className="NamePrice">
                                                Subtotal
                                            </td>
                                            <td className="totalPriceRight">
                                                $398
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="NamePrice">
                                                Shipping
                                            </td>
                                            <td className="totalPriceRight">
                                                $358
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="NamePrice">
                                                Taxes
                                            </td>
                                            <td className="totalPriceRight">
                                                $12.12
                                            </td>
                                        </tr>
                                    </div>

                                    <hr/>

                                    <div className="totalPrice">
                                        <tr>
                                            <td className="NamePrice totAll">
                                                Total
                                            </td>
                                            <td className="totalPriceRight totAll">
                                                $410.12
                                            </td>
                                        </tr>
                                    </div>
                                </table>
                            </div>
                            <div className="bottomOrderText"><p>All purchases are subject to our <span className="Term"> Terms and Conditions</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
