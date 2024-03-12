// ImageZoom.js
import React, { useRef, useEffect } from 'react';

const ImageZoom = ({ imageUrl, zoomLevel, setZoomLevel }) => {
    const imgRef = useRef(null);
    const lensRef = useRef(null);
    const resultRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        const lens = lensRef.current;
        const result = resultRef.current;

        let cx, cy;

        if (img) {
            cx = result.offsetWidth / lens.offsetWidth;
            cy = result.offsetHeight / lens.offsetHeight;

            result.style.backgroundImage = `url('${img.src}')`;
            result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;

            const moveLens = (e) => {
                e.preventDefault();
                const pos = getCursorPos(e);
                let x = pos.x - lens.offsetWidth / 2;
                let y = pos.y - lens.offsetHeight / 2;

                if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
                if (x < 0) x = 0;
                if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;
                if (y < 0) y = 0;

                lens.style.left = `${x}px`;
                lens.style.top = `${y}px`;
                result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
            };

            const getCursorPos = (e) => {
                let x = 0, y = 0;
                e = e || window.event;
                const a = img.getBoundingClientRect();
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return { x, y };
            };

            lens.addEventListener('mousemove', moveLens);
            img.addEventListener('mousemove', moveLens);
            lens.addEventListener('touchmove', moveLens);
            img.addEventListener('touchmove', moveLens);

            return () => {
                lens.removeEventListener('mousemove', moveLens);
                img.removeEventListener('mousemove', moveLens);
                lens.removeEventListener('touchmove', moveLens);
                img.removeEventListener('touchmove', moveLens);
            };
        }
    }, [zoomLevel]);

    return (
        <div className="Main-Container">
            <div className="main-box">
                <img
                    id="zoom-image"
                    ref={imgRef}
                    src={imageUrl}
                    alt=""
                    style={{
                        maxWidth: "480px",
                        width: "100%",
                    }}
                />
                <div
                    ref={lensRef}
                    style={{
                        position: 'absolute',
                        border: '1px solid #d4d4d4',
                        width: '40px',
                        height: '40px',
                    }}
                ></div>
                <div
                    ref={resultRef}
                    style={{
                        position: 'absolute',
                        border: '1px solid #d4d4d4',
                        width: '300px',
                        height: '300px',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ImageZoom;
