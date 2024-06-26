import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'dropify/dist/js/dropify'; // Path to your Dropify JS file
import 'dropify/dist/css/dropify.min.css'; // Path to your Dropify CSS file

const DropifyWrapper = ({ inputName }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        $(inputRef.current).dropify(); // Initialize Dropify

        return () => {
            $(inputRef.current).dropify('destroy'); // Clean up Dropify when component unmounts
        };
    }, []);

    return (
        <div>
            <input
                ref={inputRef}
                type="file"
                className="dropify"
                data-name={inputName} // Set input name as a data attribute
            />
        </div>
    );
};

export default DropifyWrapper;