import { useState } from "react";
import { feedbackTypes } from "../helper/helper";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<feedbackTypes | null>(null);

  return(
  <div 
  className="bg-zinc-900 p-4
  relative rounded-2xl mb-4 flex
  flex-col items-center shadow-lg 
  w-[calc(100vw-2rem)] md:w-auto"
  >

    {!feedBackType ? (
      <FeedBackTypeStep onClickFeedBackChanged={ setFeedBackType } />
    )
      : (
        <FeedBackContentStep />
      )
  }
    <footer>
      Feito com carinho ❤️ com ajuda da 
       <a className="text-brand-500 text-"> RocketSeat</a>
    </footer>
  </div>
  )
}