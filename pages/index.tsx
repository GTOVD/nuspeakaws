import { Typography } from "@material-ui/core";
import { useUser } from "../src/context/AuthContext";

export default function Home() {
    const { user } = useUser();
    console.log(user);
    return (
        <div>
            <Typography variant="h1"> Hello World! </Typography>
        </div>
    );
}
