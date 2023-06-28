import React,{ Component } from 'react';

//using class based components
export default class Login extends Component {
    
    //style
    inputStyle = "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease -linear duration-200 ";

    //states
    state = {
        email: "",
        pass: "",
    };

    handleChange = (evt) => {
        const fields = Object.assign({}, this.state);
        fields[evt.target.name]=evt.target.value;
        this.setState({ ...fields });
    };

    render() {
        return (
            <div className='flex justify-center w-[100%] h-[100vh] bg-[#b892f7]'>
                <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
                    <text className='text-2xl '> Log in </text>
                
                
                </div>   
            </div>
        )
    }
 
};
