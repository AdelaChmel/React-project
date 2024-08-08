import background from '../assets/background.png';

export default function About() {
     return (
          <div className="hero min-h-screen relative">
               <img src={background} className="absolute top-0 left-0 w-full h-full object-cover" />
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-neutral-content text-left">
                    <div className="max-w-md backdrop-blur-sm bg-black/50 p-16">
                         <h1 className="mb-5 text-5xl font-bold">About us</h1>
                         <p className="mb-5">
                              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                    </div>
               </div>
          </div>
     )
}