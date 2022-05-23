import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../../helper/helper";
import { ScreenshotButton } from "../ScreenshotButton";


interface FeedBackTypeStepProps {
  feedbackType: feedbackTypes;
  onClickRestartFeedBack: () => void;
  onClickFeedbackSent: () => void;
}


export function FeedBackContentStep(
  {feedbackType, onClickRestartFeedBack, onClickFeedbackSent
  }: FeedBackTypeStepProps) {
    const feedbackTypeInfo = FeedbackType[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [feedback, setFeedback] = useState("");
    
    function handleSubmitFeedback(event: React.FormEvent) {
      event.preventDefault();
      console.log(feedback);
      console.log(screenshot);
      onClickFeedbackSent();
    }

  return(
    <>
      <header>
        <button 
          type="button" 
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onClickRestartFeedBack}  
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-sl leading-6 flex items-center gap-2">
          <img src={ feedbackTypeInfo.image.source } alt={ feedbackTypeInfo.image.alt } className="w-6 h-6"/>
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea 
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent border-2 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none
          focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
          onChange={event => setFeedback(event.target.value)}
          placeholder="Conte com detalhes o que esta acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenshot={screenshot}
            onClickTackScreenshot={setScreenshot}
          />
          <button 
            disabled={feedback === ''}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
