import { useEffect, useState } from "react"
import Block from "../../components/Block";
import Plot from "../../components/Plot";

export default function UserData() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // TODO: load user data
    }, [])
    return (
        <Block>
            <Plot></Plot>
        </Block>
    )
}