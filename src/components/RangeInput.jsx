import React, { useContext } from 'react';
import { Github } from '../App';


function RangeInput() {

    const {perPage, setperPage,page,setSubmit} = useContext(Github); // Initial perPage within the range (between 10 and 100)

    const handleChange = (event) => {
        // Ensure the perPage stays within the specified range
        let newValue = event.target.value;
        if (newValue < 10) {
            newValue = 10;
        } else if (newValue > 100) {
            newValue = 100;
        }

        setperPage(newValue);
    };

    // const onSubmitHandler = (event) => {
    //     event.preventDefault()
    // }
    
    const handleOnClick=()=>{
        setSubmit((prev)=>!prev)

    }

    return (
      <div className='flex justify-end mr-20 p-5'>
          <div>
            <label className='font-mono font-semibold text-lg'>Enter a No of Repository Per between 10 and 100: </label>
            <input
                type="number"
                min="10"
                max="100"
                step="1"
                value={perPage}
                onChange={handleChange}
                className='font-mono font-semibold text-lg border border-gray-700'
            />
            <button className='border border-gray-700 px-2 py-1 ml-4 bg-sky-300 active:bg-slate-300' onClick={handleOnClick}>Click</button>
            <p className='font-mono font-semibold text-lg'>Current perPage: {page}</p>
        </div>
      </div>
    );
}

export default RangeInput;
