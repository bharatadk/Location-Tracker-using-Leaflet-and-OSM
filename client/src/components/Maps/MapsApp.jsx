import React, { useState } from "react";
import SearchBox1 from "./SearchBox1";
import SearchBox2 from "./SearchBox2";
import { useEffect } from "react";
import Maps from "./Maps";

const MapsApp = () => {
    const [start, setStart] = useState([19.076, 72.877]);
    const [end, setEnd] = useState([17.285, 78.4876]);
    const [dir, setDir] = useState(false);
    useEffect(() => {
        console.log("state changedd", start);
        setDir(!dir);
    }, [start, end]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh",
            }}
        >
            {dir && (
                <div style={{ width: "50vw", height: "100%" }}>
                    <Maps start={start} end={end} />
                </div>
            )}

            <div
                style={{ width: "0vw", display: "flex", flexDirection: "row" }}
            >
                <div>
                    {" "}
                    <SearchBox1 start={start} setStart={setStart} />
                </div>
                <div>
                    {" "}
                    <SearchBox2
                        end={end}
                        setEnd={setEnd}
                        isEnd={true}
                        marginEnd={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default MapsApp;
