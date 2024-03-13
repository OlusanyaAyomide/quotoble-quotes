import React from 'react'
import LayOut from '../layout/LayOut'
import QuoteView from '../detail/QuoteView'
import SimilarQuotes from '../detail/SimilarQuotes'

export default function Detail() {
  return (
    <LayOut>
      <div className="max-w-[1000px] mx-auto">
          <QuoteView/>
          <SimilarQuotes/>
      </div>
    </LayOut>
  )
}
