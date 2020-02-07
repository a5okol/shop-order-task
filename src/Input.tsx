import * as React from "react";
import {SyntheticEvent} from "react";

import GroupCopy2 from './img/GroupCopy2.svg'
import ShapeSecure from './img/ShapeSecure.svg'

export interface IValues {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    description: string,
}

interface IProps {
    countBy?: number;
}

interface IState {
    count: number;
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    selectedValue: string;
    loading: boolean;
    isActive: boolean,
    isBilling: boolean,
    isEnd: boolean,
    isPayment: boolean,
    isShipping: boolean,
    value?: any,
    valueText?: any,
    onChanged?: () => void,
}


class Input extends React.Component<IProps, IState> {

    public static defaultProps: Partial<IProps> = {
        countBy: 10,
    };

    public state: IState = {
        address: '',
        count: 0,
        description: '',
        email: '',
        first_name: '',
        isActive: false,
        isBilling: false,
        isEnd: false,
        isPayment: false,
        isShipping: true,
        last_name: '',
        loading: false,
        phone: '',
        selectedValue: '',
        submitSuccess: false,
        valueText: '',
        values: [],
    };

    public increase = () => {
        this.setState({
            isBilling: true,
            isShipping: false,
        });
    };

    public nextBilling = () => {
        this.setState({
            isBilling: false,
            isPayment: true,
        });
    };

    public nextEnd = () => {
        this.setState({
            isBilling: false,
            isEnd: true,
            isPayment: false,
            isShipping: false,
        });
    };


    public handleInputChanges = () => {
        // a.preventDefault();
        this.setState({
            // [a.currentTarget.name]: a.currentTarget.value,
        })
    };

    public change(event: React.FormEvent<HTMLInputElement>) {

        const safeSearchTypeValue: string = event.currentTarget.value;

        if (safeSearchTypeValue !== '') {
            this.setState({
                isActive: true
            });
        }
    }

    public onChangeInput(event: SyntheticEvent) {
        event.preventDefault();

        const safeValue: any = event;
        this.setState({
            value: safeValue
        });
        // document.write(safeValue);

    }


    // public InputValue(props: IState) {
    //     return <input type="text" onChange={this.state.onChanged} value={this.state.value}/>
    // }

    // public componentDidMount() {
    //     document.write(`hello`);
    // }
    public render() {


        const shipping = <div>
            <h1 className="h1Title">Shipping Info</h1>
            <div className="miniBlock">
                <h3 className="h3Title">Recipient</h3>
                <input className={'InputStyle' + (this.state.isPayment ? 'activeBread' : '')} onClick={this.change} placeholder="Full Name" type="text"/>
                <div className="DayTime">
                    <input className="InputStyle DayTime1" placeholder="Daytime Phone" type="text"/>
                    <div className="textRight">
                        <p className="DayTime2">For delivery questions only</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="h3Title">Address</h3>
                <input className="InputStyle" placeholder="Street Address" type="text"/>
                <input className="InputStyle" placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
                       type="text"/>
                <input className={"InputStyle" + " City"} placeholder="City"
                       value={'' + (this.state.isPayment ? 'activeBread' : '')} type="text"/>
                <select className="formControl" id="searchType"
                        value={this.state.selectedValue}>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Vincent & the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Sint Maarten</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Korea</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Swaziland</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                </select>
            </div>
            <input className="InputStyle small-type-right" placeholder="ZIP"
                   value={'' + (this.state.isPayment ? 'activeBread' : '')} type="text"/>
            <button className="ButtonClick" onClick={this.increase}>Increase</button>

        </div>;

        const billing = <div>
            <h1 className="h1Title">Billing Information</h1>
            <div className="miniBlock">
                <h3 className="h3Title">Billing Contact</h3>
                <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '')}
                       placeholder="Full Name" type="text" value="Jonathan Smith"/>
                <input className="InputStyle" placeholder="Email Address" type="text"/>
            </div>

            <div>
                <h3 className="h3Title">Billing Address</h3>
                <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '')}
                       placeholder="Street Address" type="text" value="Pushkina"/>
                <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '')}
                       placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
                       type="text" value="46 – 401"/>
                <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '')} placeholder="City"
                       value={'Kazan'} type="text"/>
                <select className="formControl" id="searchType"
                        value={this.state.selectedValue}>
                    <option>Russia</option>
                    <option>Romania</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Vincent & the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Sint Maarten</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Korea</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Swaziland</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                </select>
            </div>
            <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '') + " small-type-right"}
                   placeholder="ZIP" value={'420015'} type="text"/>
            <button className="ButtonClick" onClick={this.nextBilling}>Increase</button>

        </div>;

        const payment = <div>

            <h1 className="h1Title">Payment</h1>
            <div className="securePayments">
                <img src={ShapeSecure} alt="img"/>
            </div>
            <div className="miniBlock">
                <h3 className="h3Title">Cardholder Name</h3>
                <input className={"InputStyle" + (this.state.value !== '' ? ' activeInput' : '')}
                       placeholder="Full Name" type="text" value="Jonathan Smith"/>
            </div>

            <div className="miniBlock">
                <h3 className="h3Title">Card Number</h3>
                <input className={"InputStyle"}
                       placeholder="XXXX XXXX XXXX XXXX" type="text"/>

            </div>
            <div className="CardDate">
                <h3 className="h3Title">Expire Date</h3>
                <input className={"InputStyle"} placeholder="MM / YY" value={''} type="text"/>
            </div>
            <div className="CardDate">
                <h3 className="h3Title">Security Code</h3>
                <input className={"InputStyle"} type="text"/>
            </div>
            <button className="ButtonClick" onClick={this.nextEnd}>Pay Securely</button>

        </div>;
        const endOfCard = <div className="endBlock">

            <h1 className="endh1">Thank you for your order!</h1>
            <div className="textBlock">
                <p className="endPBold">Order number is: 188787788</p>
                <p className="endText">
                    Your will recieve an email confirmation <br/>
                    shortly to <a href="mailto:jonathan.smith@gmail.com">jonathan.smith@gmail.com</a>
                </p>
                <p className="endText">
                    Estimated delivery Day is <br/>
                    <b>Friday 1st April 2016</b>
                </p>
                <a href="/" className="endLink">Print Recipe</a>
            </div>
        </div>;

        const buyingProcess = <React.Fragment>
            <div className="breadcrumb">
                <span className={'breadText ' + (this.state.isShipping ? 'activeBread' : '')}>Shipping</span>
                <img src={GroupCopy2} alt="img"/>
                <span className={'breadText ' + (this.state.isBilling ? 'activeBread' : '')}>Billing</span>
                <img src={GroupCopy2} alt="img"/>
                <span className={'breadText ' + (this.state.isPayment ? 'activeBread' : '')}>Payment</span>
            </div>
            {
                this.state.isShipping
                    ? shipping
                    : this.state.isBilling
                    ? billing
                    : payment
            }
        </React.Fragment>;

        return (
            <div>
                {this.state.isEnd
                    ? endOfCard
                    : buyingProcess
                }
            </div>
        );
    }
}

export default Input;




{/*<p>My favorite number is {this.state.count}</p>*/}
{/*<input type="text" id="first_name" onChange={this.handleInputChanges} name="first_name"*/}
{/*className="InputStyle" placeholder="Full Name"/>*/}

{/*<input type="text" onChange={this.state.onChanged} value={this.state.value}/>*/}
{/*<input type="text" name="firstName"*/}
{/*onInput={this.onChangeInput}/>*/}



// import { RouteComponentProps, withRouter } from 'react-router-dom';
// // import axios from 'axios';
//
// export interface IValues {
//     first_name: string,
//     last_name: string,
//     email: string,
//     phone: string,
//     address: string,
//     description: string,
// }
//
// export interface IFormState {
//     [key: string]: any;
//     values: IValues[];
//     submitSuccess: boolean;
//     loading: boolean;
// }
//
// class Input extends React.Component<RouteComponentProps, IFormState> {
//     constructor(props: RouteComponentProps) {
//         super(props);
//         this.state = {
//             address: '',
//             description: '',
//             email: '',
//             first_name: '',
//             last_name: '',
//             loading: false,
//             phone: '',
//             submitSuccess: false,
//             values: [],
//         }
//     }
//
//     public processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
//         e.preventDefault();
//         this.setState({ loading: true });
//
//         const formData = {
//             address: this.state.address,
//             description: this.state.description,
//             email: this.state.email,
//             first_name: this.state.first_name,
//             last_name: this.state.last_name,
//             phone: this.state.phone,
//         }
//
//         this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
//
//         // axios.post(`http://localhost:3001/customers`, formData).then(data => [
//         //     setTimeout(() => {
//         //         this.props.history.push('/');
//         //     }, 1500)
//         // ]);
//     }
//
//     public handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         this.setState({
//             [e.currentTarget.name]: e.currentTarget.value,
//         })
//     }
//
//     public render() {
//         const { submitSuccess, loading } = this.state;
//         return (
//             <div>
//                 <div className={"col-md-12 form-wrapper"}>
//                     <h2> Create Post </h2>
//                     {!submitSuccess && (
//                         <div className="alert alert-info" role="alert">
//                             Fill the form below to create a new post
//                         </div>
//                     )}
//
//                     {submitSuccess && (
//                         <div className="alert alert-info" role="alert">
//                             The form was successfully submitted!
//                         </div>
//                     )}
//
//                     <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
//                         <div className="form-group col-md-12">
//                             <label htmlFor="first_name"> First Name </label>
//                             <input type="text" id="first_name"  name="first_name" className="form-control" placeholder="Enter customer's first name" />
//                         </div>
//
//                         <div className="form-group col-md-12">
//                             <label htmlFor="last_name"> Last Name </label>
//                             <input type="text" id="last_name" onChange={(e) => this.handleInputChanges(e)  name="last_name" className="form-control" placeholder="Enter customer's last name" />
//                         </div>
//
//                         <div className="form-group col-md-12">
//                             <label htmlFor="email"> Email </label>
//                             <input type="email" id="email"  name="email" className="form-control" placeholder="Enter customer's email address" />
//                         </div>
//
//                         <div className="form-group col-md-12">
//                             <label htmlFor="phone"> Phone </label>
//                             <input type="text" id="phone"  name="phone" className="form-control" placeholder="Enter customer's phone number" />
//                         </div>
//
//                         <div className="form-group col-md-12">
//                             <label htmlFor="address"> Address </label>
//                             <input type="text" id="address" name="address" className="form-control" placeholder="Enter customer's address" />
//                         </div>
//
//                         <div className="form-group col-md-12">
//                             <label htmlFor="description"> Description </label>
//                             <input type="text" id="description"  name="description" className="form-control" placeholder="Enter Description" />
//                         </div>
//
//                         <div className="form-group col-md-4 pull-right">
//                             <button className="btn btn-success" type="submit">
//                                 Create Customer
//                             </button>
//                             {loading &&
//                             <span className="fa fa-circle-o-notch fa-spin" />
//                             }
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default withRouter(Input)


// import { useForm } from "react-hook-form";

// interface IProps {
//     name?: string;
// }
// // inputRef: HTMLInputElement | null;
// // inputRef: HTMLInputElement | null;
//
// const Input: React.SFC<IProps> = (props: IProps) => (
//     <p>Hello, {props.name}! Welcome to React and TypeScript.</p>
// );
//
// export default Input;


/*
export interface CustomInputProps {
    placeHolder: Boolean;
}

class Input extends React.Component<CustomInputProps> {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef()
    }

    public state = {
        hello: true
    };

    public render() {

        const inputClasses = ['input'];

        if (this.props.placeHolder !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        if (this.props.placeHolder.length > 4) {
            inputClasses.push('bold')
        }

        return (
            <div className="Input">
                <input
                    ref={(inputRef) => this.inputRef = inputRef}
                    type="text"
                    className={inputClasses.join(' ')}
            />
            </div>
        );
    }
}

export default Input;*/