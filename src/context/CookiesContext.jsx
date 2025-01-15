import { useEffect } from "react"

export const CookiesHandler = () => {
    // const [getCookies, useGetCookies] = useState("");
    useEffect (() => {
       const cookies = document.cookie;
        console.log("Cookies: ", cookies);
       if (!cookies) {
        window.location.href = "/login"
       }
    }, []);

    return null;
}