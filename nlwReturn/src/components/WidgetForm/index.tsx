import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { feedbackTypes } from "../helper/helper";

type feedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<feedbackTypes | null>(null);

  return(
  <div 
  className="bg-zinc-900 p-4
  relative rounded-2xl mb-4 flex
  flex-col items-center shadow-lg 
  w-[calc(100vw-2rem)] md:w-auto"
  >
    <header>
      <span className="text-sl leading-6">Deixe seu Feedback</span>
      <CloseButton />
    </header>

    {!feedBackType ? (
      <div className="flex py-8 gap-2 w-full">
      { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={ () => setFeedBackType(key as feedbackTypes) }
            type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>
  
    )
      : (
        <h3>Ta safe</h3>
      )
  }
    <footer>
      Feito com carinho ❤️ com ajuda da 
       <a className="text-brand-500 text-"> RocketSeat</a>
    </footer>
  </div>
  )
}