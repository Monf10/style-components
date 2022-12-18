import style from "./Section.module.scss" //ამ შემთხვევაში ხელით მოგიწევთ ფაილის შემოტანა პროექტში
//მეორე ვარიანტია შექმნათ სტილის მოდულები ყველა კომპონენტისთვის ცალცალკე.
export function Section () {
    {/* სტილს ვექცევით როგორც js ობიექტს. ანუ style დან წააკითხებთ იმ მახასიათებელს რომელიც აღწერეთ */}
    return <div className={style.pricing}> 
    {/* შეგიძლიათ გამოიყენოთ კლასის ან აიდინ განსაზღვრის დროს მსგავსი სინტაქტი */}

    <h1>Try Pulse free for30 days.</h1>
    <section className={style.section}>
{/* დანარჩენ ჩაშენებულ ტეგებს აღარ მივწვდები როგორც ობიექტებს, რადგან ავტომატურად შევძლებთ  მათ გარჩევას */}
{/* სტილის სანახავად შეამოწმეთ  Section.module.scss ფაილი */}
        <h2>Small Buisness Plan        </h2>
        <h3> $59 per month</h3>
        <button>Sing up NoW</button>
        <p>See Money In and Money Out, categorize transactions, and run helpful reports</p>
        <p>See Money In and Money Out, categorize transactions, and run helpful reports</p>
        <p>See Money In and Money Out, categorize transactions, and run helpful reports</p>
        <p>See Money In and Money Out, categorize transactions, and run helpful reports</p>
    </section>
    </div> 
}