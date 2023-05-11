import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Search = () => {
    const [value, setState] = useState('');
    const {show} = useContext(AlertContext)
    const onSubmit = (event) => {
        if(event.key !== 'Enter'){
            return
        }
        if(value.trim()){
            console.log('Make request with ' + value)
        }else{
            show('Enter user name')
        }
    }
    return(
        <div className={'form-group'}>
            <input type="text" className={'form-control'} value={value} onChange={e => setState(e.target.value)} placeholder={'Input user name'}
            onKeyPress={onSubmit}
            />
        </div>
    )
}
