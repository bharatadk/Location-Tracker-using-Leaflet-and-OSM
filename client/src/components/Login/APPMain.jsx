import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Profile from "./Profile";

function APPMain() {
    const [items, setItems] = useState([]);
    const [user] = useState("bharatadk");
    const colorsPallete = [
        " rgba(130, 205, 205, 0.5)",
        " rgba(238, 221, 130, 0.5)",
        " rgba(130, 205, 168, 0.5)",
        "  rgba(130, 168, 205, 0.5)",
        " rgba(205, 130, 130, 0.5)",
        "rgba(246,224,181,0.5)",
        "rgba(238,169,144,0.5)",
        "rgba(163,145,147,0.5)",
    ];

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=20&sort=updated`
            );
            const data = await res.json();
            setItems(data);
            console.log(data);
        };

        fetchRepos();
    }, [user]);

    return (
        <>
            <div>
                <h1
                    style={{
                        color: "#ccc",
                        width: "100%",
                        background: "#003855",
                        border: "none",
                        height: "60px",
                        marginBottom: "40px",
                        marginTop: "0",
                    }}
                >
                    Some GitHub Repos of {user} 👇{" "}
                </h1>
            </div>

            {!items ? (
                <Loader />
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                    }}
                >
                    {items.map((item) => (
                        <Profile
                            key={item.id}
                            {...item}
                            bgColor={
                                colorsPallete[Math.trunc(Math.random() * 8)]
                            }
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default APPMain;
