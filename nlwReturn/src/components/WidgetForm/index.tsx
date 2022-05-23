import { useState } from "react";
import { feedbackTypes } from "../helper/helper";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSuccessStep } from "./Steps/FeedBackSuccessStep";
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<feedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  /* seta i esta para null assim a pagina do widget volta ao estado inicial */
  function handleRestartFeedBack() {
    setFeedbackSent(false)
    setFeedBackType(null);
  }

  return(
  <div 
  className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
  >

    { feedbackSent ? (
      <FeedBackSuccessStep onClickRestartFeedBack={handleRestartFeedBack}/>
    ) : (
      <>
        {!feedBackType ? (
            <FeedBackTypeStep onClickFeedBackChanged={ setFeedBackType } />
          )
            : (
              <FeedBackContentStep 
                feedbackType={feedBackType} 
                onClickRestartFeedBack={ handleRestartFeedBack }
                onClickFeedbackSent={ () => setFeedbackSent(true) }
              />
            )
        }
      </>
    )}

  <footer>
    Feito com carinho ❤️ com ajuda da 
      <a className="text-brand-500 text-"> RocketSeat</a>
  </footer>
  </div>
  )
}
