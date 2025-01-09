import React, { useState } from "react";
import "./App.css";

export default function Opening() {
    // 활성화된 별(star)을 추적하기 위한 상태 설정
    const [expanded, setExpanded] = useState(null);

    // 클릭 이벤트 핸들러
    const onClick = (name) => {
        setExpanded((prev) => (prev === name ? null : name)); // 같은 별을 클릭하면 토글
    };

    return (
        <div className="stars">
        <div
            className={`star moon ${expanded === "moon" ? "expanded" : ""}`}
            onClick={() => onClick("moon")}
        >
            <h2>Banana</h2>
            <img
            src="https://github.com/lucasfernandodev/spacetravel/blob/main/src/lib/assets/destination/image-moon.png?raw=true"
            alt="Moon"
            />
            <button>Discover Banana</button>
        </div>
        <div
            className={`star mars ${expanded === "mars" ? "expanded" : ""}`}
            onClick={() => onClick("mars")}
        >
            <h2>Ongsik</h2>
            <img
            src="https://github.com/lucasfernandodev/spacetravel/blob/main/src/lib/assets/destination/image-mars.png?raw=true"
            alt="Mars"
            />
            <button>Discover Ongsik</button>
        </div>
        <div
            className={`star titan ${expanded === "titan" ? "expanded" : ""}`}
            onClick={() => onClick("titan")}
        >
            <h2>BBing</h2>
            <img
            src="https://github.com/lucasfernandodev/spacetravel/blob/main/src/lib/assets/destination/image-titan.png?raw=true"
            alt="Titan"
            />
            <button>Discover BBing</button>
        </div>
        <div
            className={`star europa ${expanded === "europa" ? "expanded" : ""}`}
            onClick={() => onClick("europa")}
        >
            <h2>HaeTTong</h2>
            <img
            src="https://raw.githubusercontent.com/lucasfernandodev/spacetravel/refs/heads/main/src/lib/assets/destination/image-europa.webp"
            alt="Europa"
            />
            <button>Discover HaeTTong</button>
        </div>
        </div>
    );
}