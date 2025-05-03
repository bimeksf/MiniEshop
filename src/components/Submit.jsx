import { useFormStatus } from "react-dom"

export default function Submit (){
    const {pending} = useFormStatus()
  return(


      <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
    {pending ? "Logging in..." : "Login"}
  </button>
) 
}