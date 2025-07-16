import React from 'react'
import { saveAs } from "file-saver";

function DownloadButton({ text, className, id }) {

    const handleDownload = () => {
        console.log('hai');

        let url = `${import.meta.env.BASE_URL}document/BeffinYohannan.pdf`
        saveAs(url, 'BeffinYohannanResume.pdf');
    };

    return (
        <a
            onClick={handleDownload}
            className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
        >
            <div className="cta-button1 group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    {/* <img src="/images/arrow-down.svg" alt="arrow" /> */}
                    <img src={`${import.meta.env.BASE_URL}images/arrow-down.svg`} alt="arrow" />

                </div>
            </div>
        </a>
    )
}

export default DownloadButton