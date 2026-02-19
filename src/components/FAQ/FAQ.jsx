import React from 'react'

const faqData=[
    {
        question: "What is Fanta",
        answer: "Fanta is a popular fruit-flavored carboned soft drink created by the Coca-Cola Company",
    },
    {
        question: "What flavors does fanta offer ? ",
        answer:"Fanta offer a veriety of flavors including Orange, grape, pineapple, and more!",
    },
    {
        question: "Is Fanta gluten-free ?",
        answer:"Yes, fanta is gluten-free, making is suitable for those with gluten intolerence",
    },
    {
        question: "How many calories are in fanta in a Can of Fanta",
        answer:"A 12 oz can of fanta orange contains about 160 calories",
    },
]

const FAQ = () => {

    const [active, setActive] = React.useState(null);
    const handleClick = (index) => {
        setActive(index===active? null:index); 
    }
  return (
    <div className='max-w-2xl mx-auto mt-20 mb-28 py-4'> 
        <h1 className='text-3xl font-bold text-center pb-8'>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
            <div key={index} className='mb-4 py-4 border-b border-gray -300 '>
                <div className='flex justify-between items-center cursor-pointer py-4' onClick={()=>handleClick(index)}>
                    <h1 className='text-xl font-semibold' >{item.question}</h1>
                    <span>{active===index? "-": "+"}</span> 
                </div>
                {active===index && <p className='text-gray-600'>{item.answer}</p>} 
            </div>
        ))}

    </div>
  )
}

export default FAQ;