import pagenotfound from "../assets/pagenotfound.png"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import { useEffect } from "react"


export default function PageNotFound() {

  useEffect(() => {
    document.title = "Page Not Found";  
  });

  return (
    <main>
      
      <section>

        <div className="flex flex-col justify-center px-2 m-4">
          <div className="flex flex-col items-center my-4 ">
            <p className="text-7xl text-gray-700 font-bold dark:text-white pb-3">
              404 Oops!
            </p>

            <div className="max-w-sm">
              <img className="rounded" src={pagenotfound} alt="PageNotFound" />
            </div>

            <Link to='/'>
              <Button text="Back to Home"/>
            </Link>

          </div>
        </div>
      </section>
    </main>
  )
}

