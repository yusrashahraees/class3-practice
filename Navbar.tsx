import Link from "next/link"
export default function Navbar (){
    return(
        <footer style={{backgroundColor:"blue" , color:"white"}}>
            <nav>
                <ul>
                    <li style={{color:"white"}}>
                        <Link href="/category/sports">Sports</Link>
                    </li> 
                    <li style={{color:"white"}}>
                        <Link href="/products/product1">Laptop</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}