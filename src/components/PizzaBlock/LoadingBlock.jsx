import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            justify-content="space-between"
        >
            <circle cx="130" cy="130" r="110" />
            <rect x="10" y="260" rx="5" ry="5" width="240" height="24" />
            <rect x="10" y="300" rx="5" ry="5" width="240" height="84" />
            <rect x="10" y="410" rx="5" ry="5" width="90" height="30" />
            <rect x="120" y="405" rx="20" ry="20" width="130" height="40" />
        </ContentLoader>
    );
}

export default LoadingBlock;