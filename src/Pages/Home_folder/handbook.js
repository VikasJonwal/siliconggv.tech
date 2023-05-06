import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Handbook = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div >
            <iframe
                src="/static_img/Sihandbook.pdf" style={{height:"80vh"}}
                width="78%"
                
            ></iframe>
        </div>
    );
}

export default Handbook;