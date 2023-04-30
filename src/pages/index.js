import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const handleClick = ()=>{
    router.push('/product')
  }
  return (
    <main className='h-screen'>
      <h1 className="text-center text-[30px] pt-5">Home page</h1> <br />
      
      <div className="flex justify-center items-center">
      <Link className="px-4" href='/blog'>
        <span>Blog</span>
      </Link>
      <Link className="px-4" href='/product'>
        <span>Products</span>
      </Link>
      <Link className="px-4" href='/docs'>
        <span>Docs</span>
      </Link>
      <Link className="px-4" href='/posts'>
        <span>Post</span>
      </Link>

      <button className="mx-20 my-20 px-10 py-2 bg-orange-400" onClick={handleClick}>Place Order</button>
      </div>
    </main>
  )
}
