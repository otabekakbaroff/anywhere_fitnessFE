import React,{useState,useEffect} from 'react';

function Quotes(){
    const [quote,setQuote]=useState('');
    const [quoteAuthor,setQuoteAuther]=useState("");
    useEffect(()=>{
        let d = new Date();
        let n = d.getDay();
        GenerateQuote(n);
    },[])
    function GenerateQuote(date){
        switch(date) {
            case 0:
              setQuote("Don't wait for Monday, Today is your day!!!")
              setQuoteAuther("-From us to You!😉");
            break;
            case 1:
              setQuote("With the new day comes new strength and new thoughts.")
              setQuoteAuther("-Eleanor Roosevelt");
              break;
            case 2:
                setQuote("When something is important enough, you do it even if odds are not in your favor.")
                setQuoteAuther("-Elon Musk");
              break;
            case 3:
                setQuote("Without passion, you don't have energy, without energy, you have nothing.")
                setQuoteAuther("-Warren Buffet");
              break;
            case 4:
                setQuote("A winner is a dreamer who never gives up.")
                setQuoteAuther("-Nelson Mandela");
              break;
            case 5:
                setQuote("Doubt kills more dreams than failure ever will.")
                setQuoteAuther("-Suzy Kassem");
              break;
            case 6:
                setQuote("If you can't fly,then run, if you can't run then walk, if you can't walk, then crawl, but whatever you do, keep moving forward")
                setQuoteAuther("-Martin Luther King Jr.");
              break;
            default:
              setQuote('Sorry, No Quote Today :(');
          }
    }
    return(
        <div className="quotes">
            <h1>Quote of the day</h1>
            <p>{quote}</p>
            <p className="saidBy">{quoteAuthor}</p>
        </div>
    )

}


export default Quotes;